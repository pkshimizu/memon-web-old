import React from 'react';
import { Grid } from '@material-ui/core';
import List from '../../atoms/List';
import ListItem from '../../atoms/List/item';
import { Note, Add } from '@material-ui/icons';
import { Memo } from '../../stores/Memos/types';
import Button from '../../atoms/Button';

interface MemoListProps {
  memos: Memo[];
  selectedMemoUuid?: string;
  onClickAddMemo: () => void;
  onSelectMemo: (memo: Memo) => void;
}

const MemoList: React.FC<MemoListProps> = props => {
  const { memos, selectedMemoUuid, onClickAddMemo, onSelectMemo } = props;
  return (
    <Grid container={true} direction={'column'} alignItems={'stretch'}>
      <Button onClick={onClickAddMemo}>
        <Add />
      </Button>
      <List>
        {memos.map((memo, index) => (
          <ListItem
            key={`memo_${index}`}
            icon={<Note />}
            text={memo.title}
            sub={memo.updatedAt}
            selected={memo.uuid === selectedMemoUuid}
            onClick={() => onSelectMemo(memo)}
          />
        ))}
      </List>
    </Grid>
  );
};

export default MemoList;
