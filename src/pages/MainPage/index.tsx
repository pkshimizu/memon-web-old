import React from 'react';
import SiteHeader from '../../organisms/SiteHeader';
import MarkdownEditor from '../../atoms/MarkdownEditor';
import MemoList from '../../organisms/MemoList';
import MainTemplate from '../../templates/MainTemplate';

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = props => {
  return (
    <MainTemplate
      header={<SiteHeader />}
      sidebar={<MemoList memos={[]} />}
      body={<MarkdownEditor keyBinding={'vim'} />}
    />
  );
};

export default MainPage;
