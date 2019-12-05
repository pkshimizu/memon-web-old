import React from 'react'
import {Grid} from "@material-ui/core";
import SearchForm from "../../molecules/SearchForm";
import List from "../../atoms/List";
import ListItem from "../../atoms/List/item";
import {Folder, Note} from "@material-ui/icons";

type Folder = {
  name: string
}

type Memo = {
  title: string
}

type MemoListProps = {
  folders: Folder[],
  memos: Memo[]
}

const MemoList: React.FC<MemoListProps> = props => {
  const {folders, memos} = props;
  return (
    <Grid container direction="column" alignItems={"stretch"}>
      <SearchForm/>
      <List header="Folders">
        { folders.map( folder => (
          <ListItem icon={<Folder/>} text={folder.name} />
        ))}
      </List>
      <List header="Memos">
        { memos.map( memo => (
          <ListItem icon={<Note/>} text={memo.title} />
        ))}
      </List>
    </Grid>
  )
};

export default MemoList
