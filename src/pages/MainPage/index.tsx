import React from 'react';
import SiteHeader from '../../organisms/SiteHeader';
import MarkdownEditor from '../../atoms/MarkdownEditor';
import SideBar from '../../organisms/SideBar';
import MainTemplate from '../../templates/MainTemplate';
import { Memo } from '../../stores/Memos/types';

interface MainPageProps {
  selectedMemo: Memo;
  memos: Memo[];
  onClickAddMemo: () => void;
  onSelectMemo: (memo: Memo) => void;
  onChangeMemoContent: (content: string) => void;
}

const MainPage: React.FC<MainPageProps> = props => {
  const { selectedMemo, memos, onClickAddMemo, onSelectMemo, onChangeMemoContent } = props;
  return (
    <MainTemplate
      header={<SiteHeader />}
      sidebar={
        <SideBar
          memos={memos}
          selectedMemoUuid={selectedMemo.uuid}
          onClickAddMemo={onClickAddMemo}
          onSelectMemo={onSelectMemo}
        />
      }
      body={<MarkdownEditor content={selectedMemo.content} keyBinding={'vim'} onChangeContent={onChangeMemoContent} />}
    />
  );
};

export default MainPage;
