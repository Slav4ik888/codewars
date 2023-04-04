import * as React from 'react';
import { Editor } from 'draft-js';
import { Box } from '@mui/material';
import { useEditorApi } from './context';
import { BLOCK_RENDER_MAP, CUSTOM_STYLE_MAP } from '../types';


const useStyles = (classes: object) => ({
  root: {
    border: `1px solid black`,
    p: 2,
    cursor: `pointer`,
    ...classes
  },
  content: {
    minHeight: 100,
  }
});


export type TextEditorProps = {
  classes?: object;
};


const TextEditor: React.FC<TextEditorProps> = ({ classes = {} }) => {
  const
    { state, onChange, handleKeyCommand, handlerKeyBinding } = useEditorApi(),
    sx = useStyles(classes);

  
  return (
    <Box sx={sx.root}>
      <Editor
        spellCheck
        editorState      = {state}
        onChange         = {onChange}
        blockRenderMap   = {BLOCK_RENDER_MAP}
        customStyleMap   = {CUSTOM_STYLE_MAP}
        handleKeyCommand = {handleKeyCommand}
        keyBindingFn     = {handlerKeyBinding}
      />
    </Box>
  );
}

export default TextEditor;
