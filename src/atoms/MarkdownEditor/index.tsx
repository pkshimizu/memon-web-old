import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/theme-textmate';
import 'ace-builds/src-noconflict/keybinding-vim';
import 'ace-builds/src-noconflict/keybinding-emacs';

interface MarkdownEditorProps {
  content: string;
  onChangeContent: (content: string) => void;
  keyBinding?: string;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = props => {
  const { content, keyBinding, onChangeContent } = props;
  return (
    <AceEditor
      value={content}
      placeholder={''}
      mode={'markdown'}
      theme={'textmate'}
      keyboardHandler={keyBinding}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      width={'100%'}
      height={'100%'}
      setOptions={{
        showLineNumbers: true,
        tabSize: 2,
      }}
      onChange={onChangeContent}
    />
  );
};

export default MarkdownEditor;
