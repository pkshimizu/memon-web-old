import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/theme-textmate';
import 'ace-builds/src-noconflict/keybinding-vim';
import 'ace-builds/src-noconflict/keybinding-emacs';

interface MarkdownEditorProps {
  content: string;
  onChangeContent: (content: string) => void;
  focus: boolean;
  keyBinding?: string;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = props => {
  const { content, keyBinding, onChangeContent, focus } = props;
  return (
    <AceEditor
      value={content}
      placeholder={''}
      mode={'markdown'}
      theme={'textmate'}
      keyboardHandler={keyBinding}
      fontSize={14}
      showPrintMargin={false}
      showGutter={true}
      highlightActiveLine={true}
      width={'100%'}
      height={'100%'}
      setOptions={{
        showLineNumbers: true,
        tabSize: 2,
      }}
      onChange={onChangeContent}
      editorProps={{ $blockScrolling: true }}
      debounceChangePeriod={1000}
      focus={focus}
    />
  );
};

export default MarkdownEditor;
