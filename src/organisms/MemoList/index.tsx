import React from 'react';
import { Grid } from '@material-ui/core';
import SearchForm from '../../molecules/SearchForm';
import List from '../../atoms/List';
import ListItem from '../../atoms/List/item';
import { Folder, Note } from '@material-ui/icons';

interface Folder {
  name: string;
}

interface Memo {
  title: string;
}

interface MemoListProps {
  folders: Folder[];
  memos: Memo[];
}

const MemoList: React.FC<MemoListProps> = props => {
  const { folders, memos } = props;
  return (
    <Grid container={true} direction={'column'} alignItems={'stretch'}>
      <SearchForm />
      <List header="Folders">
        {folders.map((folder, index) => (
          <ListItem key={`folder_${index}`} icon={<Folder />} text={folder.name} />
        ))}
      </List>
      <List header="Memos">
        {memos.map((memo, index) => (
          <ListItem key={`memo_${index}`} icon={<Note />} text={memo.title} />
        ))}
      </List>
    </Grid>
  );
};

export default MemoList;
