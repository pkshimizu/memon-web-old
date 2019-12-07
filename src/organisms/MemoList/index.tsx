import React from 'react';
import { Grid } from '@material-ui/core';
import SearchForm from '../../molecules/SearchForm';
import List from '../../atoms/List';
import ListItem from '../../atoms/List/item';
import { Folder, Note } from '@material-ui/icons';
import {Memo} from "../../stores/Memos/types";

interface MemoListProps {
  memos: Memo[];
}

const MemoList: React.FC<MemoListProps> = props => {
  const { memos } = props;
  return (
    <Grid container={true} direction={'column'} alignItems={'stretch'}>
      <SearchForm />
      <List header="Memos">
        {memos.map((memo, index) => (
          <ListItem key={`memo_${index}`} icon={<Note />} text={memo.title} />
        ))}
      </List>
    </Grid>
  );
};

export default MemoList;
