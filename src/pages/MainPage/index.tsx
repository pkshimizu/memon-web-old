import React from 'react';
import SiteHeader from '../../organisms/SiteHeader';
import MarkdownEditor from '../../atoms/MarkdownEditor';
import MainTemplate from '../../templates/MainTemplate';
import { Memo } from '../../stores/Memos/types';
import ActionButtons from '../../molecules/ActionButtons';
import MemoList from '../../molecules/MemoList';

interface MainPageProps {
  selectedMemo: Memo | undefined;
  memos: Memo[];
  onClickLogout: () => void;
  onClickAddMemo: () => void;
  onSelectMemo: (memo: Memo) => void;
  onChangeMemoContent: (content: string) => void;
}

const MainPage: React.FC<MainPageProps> = props => {
  const { selectedMemo, memos, onClickLogout, onClickAddMemo, onSelectMemo, onChangeMemoContent } = props;
  return (
    <MainTemplate
      header={<SiteHeader onClickLogout={onClickLogout} />}
      buttons={<ActionButtons onClickAdd={onClickAddMemo} />}
      list={
        <MemoList
          memos={memos}
          selectedMemoUuid={selectedMemo === undefined ? undefined : selectedMemo.uuid}
          onSelectMemo={onSelectMemo}
        />
      }
      body={
        <MarkdownEditor
          content={selectedMemo === undefined ? '' : selectedMemo.content}
          keyBinding={'vim'}
          onChangeContent={onChangeMemoContent}
        />
      }
    />
  );
};

export default MainPage;
