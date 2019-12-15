import React from 'react';
import MainPage from './index';
import { Memo } from '../../stores/Memos/types';
import { RootState } from '../../stores';
import { useDispatch, useSelector } from 'react-redux';
import { createMemo, saveMemo, selectMemo } from '../../stores/Memos/actions';

const MainPageContainer: React.FC = () => {
  const memos = useSelector<RootState, Memo[]>(state => state.memo.memos);
  const selectedMemo = useSelector<RootState, Memo>(state => state.memo.selectedMemo);

  const dispatch = useDispatch();
  const onClickAddMemo = React.useCallback(() => dispatch(createMemo()), [dispatch]);
  const onSelectMemo = React.useCallback(memo => dispatch(selectMemo(memo.uuid)), [dispatch]);
  const onChangeMemoContent = React.useCallback(content => dispatch(saveMemo(selectedMemo.uuid, content)), [
    dispatch,
    selectedMemo,
  ]);

  return (
    <MainPage
      selectedMemo={selectedMemo}
      memos={memos}
      onClickAddMemo={onClickAddMemo}
      onSelectMemo={onSelectMemo}
      onChangeMemoContent={onChangeMemoContent}
    />
  );
};

export default MainPageContainer;
