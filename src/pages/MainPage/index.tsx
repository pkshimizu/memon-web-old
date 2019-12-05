import React from 'react'
import SiteHeader from "../../organisms/SiteHeader";
import MarkdownEditor from "../../atoms/MarkdownEditor";
import MemoList from "../../organisms/MemoList";
import MainTemplate from "../../templates/MainTemplate";

type MainPageProps = {
}

const MainPage: React.FC<MainPageProps> = props => {
  return (
    <MainTemplate
      header={<SiteHeader/>}
      sidebar={<MemoList folders={[]} memos={[]}/>}
      body={<MarkdownEditor keybinding={"vim"}/>}
    />
  )
};

export default MainPage
