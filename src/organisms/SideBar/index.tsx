import React from 'react';
import { Grid } from '@material-ui/core';
import ActionButtons from '../../molecules/ActionButtons';
import MemoList from '../../molecules/MemoList';
import { Memo } from '../../stores/Memos/types';

interface SideBarProps {
  memos: Memo[];
  selectedMemoUuid: string;
  onClickAddMemo: () => void;
  onSelectMemo: (memo: Memo) => void;
}

const SideBar: React.FC<SideBarProps> = props => {
  const { memos, selectedMemoUuid, onClickAddMemo, onSelectMemo } = props;
  return (
    <Grid container={true} direction={'column'} alignItems={'stretch'}>
      <ActionButtons onClickAdd={onClickAddMemo} />
      <MemoList memos={memos} selectedMemoUuid={selectedMemoUuid} onSelectMemo={onSelectMemo} />
    </Grid>
  );
};

export default SideBar;
