import React from 'react';
import AceEditor, { ICommand } from 'react-ace';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/theme-textmate';
import 'ace-builds/src-noconflict/keybinding-vim';
import 'ace-builds/src-noconflict/keybinding-emacs';
import { Shortcut } from '../../../defines';

interface MarkdownEditorProps {
  content: string;
  onChangeContent: (content: string) => void;
  focus: boolean;
  keyBinding?: string;
  shortcuts?: Shortcut[];
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = props => {
  const { content, keyBinding, onChangeContent, focus, shortcuts } = props;
  const commands: ICommand[] = (shortcuts || []).map(shortcut => ({
    name: shortcut.name,
    bindKey: { win: shortcut.key.replace('+', '-'), mac: shortcut.key.replace('+', '-') },
    exec: shortcut.handler,
  }));
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
      commands={commands}
    />
  );
};

export default MarkdownEditor;
