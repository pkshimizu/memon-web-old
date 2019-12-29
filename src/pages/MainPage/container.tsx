import React from 'react';
import MainPage from './index';
import { Memo } from '../../stores/Memos/types';
import { RootState } from '../../stores';
import { useDispatch, useSelector } from 'react-redux';
import { createMemo, saveMemo, selectMemo } from '../../stores/Memos/actions';
import { User } from 'firebase';
import { Redirect } from 'react-router';
import { logout } from '../../stores/Users/actions';

const MainPageContainer: React.FC = () => {
  const user = useSelector<RootState, User | undefined>(state => state.user.user);
  const memos = useSelector<RootState, Memo[]>(state => state.memo.memos);
  const selectedMemo = useSelector<RootState, Memo>(state => state.memo.selectedMemo);

  const dispatch = useDispatch();
  const onClickLogout = React.useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  const onClickAddMemo = React.useCallback(() => dispatch(createMemo()), [dispatch]);
  const onSelectMemo = React.useCallback(memo => dispatch(selectMemo(memo.uuid)), [dispatch]);
  const onChangeMemoContent = React.useCallback(content => dispatch(saveMemo(selectedMemo.uuid, content)), [
    dispatch,
    selectedMemo,
  ]);

  if (user === undefined) {
    return <Redirect to={'/login'} />;
  }

  return (
    <MainPage
      selectedMemo={selectedMemo}
      memos={memos}
      onClickLogout={onClickLogout}
      onClickAddMemo={onClickAddMemo}
      onSelectMemo={onSelectMemo}
      onChangeMemoContent={onChangeMemoContent}
    />
  );
};

export default MainPageContainer;
