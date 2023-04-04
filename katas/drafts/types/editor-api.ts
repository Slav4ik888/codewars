import { DraftEditorCommand, DraftHandleValue, EditorState } from "draft-js";
import { BlockType, InlineStyle, KeyCommand } from ".";

export type EditorApi = {
  state             : EditorState;
  onChange          : (state: EditorState) => void;

  currentBlockType  : BlockType;
  toggleBlockType   : (blockType: BlockType) => void;

  toggleInlineStyle : (inlineStyle: InlineStyle) => void;
  hasInlineStyle    : (inlineStyle: InlineStyle) => boolean;

  addLink           : (url: string) => void;
  setEntityData     : (entityKey: string, data: Record<string, string>) => void;

  handleKeyCommand  : (command: DraftEditorCommand, editorState: EditorState) => DraftHandleValue;
  handlerKeyBinding : (e: React.KeyboardEvent) => KeyCommand | null;
  
  toHtml            : () => string;
};
