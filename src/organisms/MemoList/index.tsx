import React from 'react';
import { Grid } from '@material-ui/core';
import SearchForm from '../../molecules/SearchForm';
import List from '../../atoms/List';
import ListItem from '../../atoms/List/item';
import { Note, Add } from '@material-ui/icons';
import { Memo } from '../../stores/Memos/types';
import Button from '../../atoms/Button';

interface MemoListProps {
  memos: Memo[];
  onClickAddMemo: () => void;
}

const MemoList: React.FC<MemoListProps> = props => {
  const { memos, onClickAddMemo } = props;
  return (
    <Grid container={true} direction={'column'} alignItems={'stretch'}>
      <SearchForm />
      <Button onClick={onClickAddMemo}>
        <Add />
      </Button>
      <List>
        {memos.map((memo, index) => (
          <ListItem key={`memo_${index}`} icon={<Note />} text={memo.title} />
        ))}
      </List>
    </Grid>
  );
};

export default MemoList;
