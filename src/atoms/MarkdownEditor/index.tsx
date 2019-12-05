import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/theme-textmate';
import 'ace-builds/src-noconflict/keybinding-vim';
import 'ace-builds/src-noconflict/keybinding-emacs';

interface MarkdownEditorProps {
  keyBinding?: string;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = props => {
  const { keyBinding } = props;
  return (
    <AceEditor
      placeholder={'Placeholder Text'}
      mode={'markdown'}
      theme={'textmate'}
      keyboardHandler={keyBinding}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={''}
      width={'100%'}
      height={'100%'}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
};

export default MarkdownEditor;
