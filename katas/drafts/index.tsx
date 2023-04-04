import * as React from 'react';
import {TextEditorProvider} from './text-editor/context';
import TextEditor from './text-editor/text-editor';
import ToolPanel from './tool-panel';
import 'draft-js/dist/Draft.css';

const TextEditorApp = () => {

  return (
    <TextEditorProvider >
      <ToolPanel />
      <TextEditor />
    </TextEditorProvider>
  )
};

export default TextEditorApp;
