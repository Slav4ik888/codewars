import * as React from 'react';
import { DraftEntityMutability, EditorState, RichUtils, CompositeDecorator, KeyBindingUtil, getDefaultKeyBinding } from 'draft-js';
import { BlockType, InlineStyle, EntityType, KeyCommand, EditorApi } from '../types';
import LinkDecorator from './link';
import { stateToHTML, HTMLtoState } from '../convert';



/* Объединям декораторы в один */
const decorator = new CompositeDecorator([LinkDecorator]);



export const useEditor = (html?: string): EditorApi => {
  const [state, setState] = React.useState(() =>
    html
      ? EditorState.createWithContent(HTMLtoState(html), decorator)
      : EditorState.createEmpty(decorator)
  );


  const
    selection = state.getSelection(),      /* Шаг 1 */
    content   = state.getCurrentContent(), /* Шаг 2 */
    block     = content.getBlockForKey(selection.getStartKey()); /* Шаг 3 */
    
  
  console.log('selection: ', selection);
  console.log('content: ', content);
  console.log('block: ', block);
  console.log('block.getType: ', block.getType());
  console.log(`block.toJS`, block.toJS());
  
  const addEntity = React.useCallback((entityType: EntityType, data: Record<string, string>, mutability: DraftEntityMutability) => {
    setState((currentState) => {
      /* Получаем текущий контент */
      const contentState = currentState.getCurrentContent();
      /* Создаем Entity с данными */
      const contentStateWithEntity = contentState.createEntity(entityType, mutability, data);
      /* Получаем уникальный ключ Entity */
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      /* Обьединяем текущее состояние с новым */
      const newState = EditorState.set(currentState, { currentContent: contentStateWithEntity });
      /* Вставляем ссылку в указанное место */
      return RichUtils.toggleLink(newState, newState.getSelection(), entityKey);
    })
  }, []);

  const addLink = React.useCallback((url) => {
		addEntity(EntityType.link, { url }, 'MUTABLE')
  }, [addEntity]);


  const toggleBlockType = React.useCallback((blockType: BlockType) => {
    setState((currentState) => RichUtils.toggleBlockType(currentState, blockType))
  }, []);

  const currentBlockType = React.useMemo(() => {
    const
      selection = state.getSelection(),      /* Шаг 1 */
      content   = state.getCurrentContent(), /* Шаг 2 */
      block     = content.getBlockForKey(selection.getStartKey()); /* Шаг 3 */
    
    console.log(`CBT`, block.toJS());
    
    return block.getType() as BlockType;     /* Шаг 4 */
  }, [state]);
  
  
  const toggleInlineStyle = React.useCallback((inlineStyle: InlineStyle) => {
    setState((currentState) => RichUtils.toggleInlineStyle(currentState, inlineStyle))
  }, []);
  

  const hasInlineStyle = React.useCallback((inlineStyle: InlineStyle) => {
    /* Получаем иммутабельный Set с ключами стилей */
    const currentStyle = state.getCurrentInlineStyle();
    /* Проверяем содержится ли там переданный стиль */
    return currentStyle.has(inlineStyle);
  }, [state]);
  

  const setEntityData = React.useCallback((entityKey, data) => {
    setState((currentState) => {
      /* Получаем текущий контент */
      const content = currentState.getCurrentContent();
      /* Объединяем текущие данные Entity с новыми */
      const contentStateUpdated = content.mergeEntityData(entityKey, data)
      /* Обновляем состояние редактора с указанием типа изменения */
      return EditorState.push(currentState, contentStateUpdated, 'apply-entity');
    })
  }, []);


  // Key

  const handleKeyCommand = React.useCallback((command: KeyCommand, editorState: EditorState) => {
  	const newState = RichUtils.handleKeyCommand(editorState, command);

    if (command === 'accent') {
      toggleInlineStyle(InlineStyle.ACCENT);
      return 'handled';
    }
    
    if (newState) {
 			setState(newState);
  		return 'handled';
		}

		return 'not-handled';
  }, []);

  const handlerKeyBinding = React.useCallback((e: React.KeyboardEvent) => {
  	/* Проверяем нажата ли клавиша g + ctrl/cmd */
    if (e.keyCode === 71 && KeyBindingUtil.hasCommandModifier(e)) {
    	return 'accent';
    }
  	
    return getDefaultKeyBinding(e);
  }, []);

  // Convert

  const toHtml = React.useCallback(() => {
  	return stateToHTML(state.getCurrentContent());
  }, [state]);
  


  return React.useMemo(() => ({
    state,
    onChange: setState,

    currentBlockType,
    toggleBlockType,

    toggleInlineStyle,
    hasInlineStyle,

    addLink,
    setEntityData,

    handleKeyCommand,
    handlerKeyBinding,

    toHtml
  }), [
    state,
    toggleBlockType,
    currentBlockType,
    toggleInlineStyle,
    hasInlineStyle,
    toHtml,
    addLink,
    setEntityData,
    handleKeyCommand,
    handlerKeyBinding,
  ])
}
