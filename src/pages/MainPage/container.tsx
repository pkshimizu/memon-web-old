import React from 'react';
import MainPage from './index';
import { Memo } from '../../stores/Memos/types';
import { RootState } from '../../stores';
import { useDispatch, useSelector } from 'react-redux';
import { createMemo } from '../../stores/Memos/actions';

const MainPageContainer: React.FC = () => {
  const memos = useSelector<RootState, Memo[]>(state => state.memo.memos);

  const dispatch = useDispatch();
  const onClickAddMemo = React.useCallback(() => dispatch(createMemo()), [dispatch]);

  return <MainPage memos={memos} onClickAddMemo={onClickAddMemo} />;
};

export default MainPageContainer;
