import React from 'react';
import SiteHeader from '../../organisms/SiteHeader';
import MarkdownEditor from '../../atoms/MarkdownEditor';
import MemoList from '../../organisms/MemoList';
import MainTemplate from '../../templates/MainTemplate';
import { Memo } from '../../stores/Memos/types';

interface MainPageProps {
  memos: Memo[];
  onClickAddMemo: () => void;
}

const MainPage: React.FC<MainPageProps> = props => {
  const { memos, onClickAddMemo } = props;
  return (
    <MainTemplate
      header={<SiteHeader />}
      sidebar={<MemoList memos={memos} onClickAddMemo={onClickAddMemo} />}
      body={<MarkdownEditor keyBinding={'vim'} />}
    />
  );
};

export default MainPage;
