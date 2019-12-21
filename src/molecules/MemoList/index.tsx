import React from 'react';
import { Grid } from '@material-ui/core';
import List from '../../atoms/List';
import ListItem from '../../atoms/List/item';
import { Note } from '@material-ui/icons';
import { Memo } from '../../stores/Memos/types';

interface MemoListProps {
  memos: Memo[];
  selectedMemoUuid?: string;
  onSelectMemo: (memo: Memo) => void;
}

const MemoList: React.FC<MemoListProps> = props => {
  const { memos, selectedMemoUuid, onSelectMemo } = props;
  return (
    <Grid container={true} direction={'column'} alignItems={'stretch'}>
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
