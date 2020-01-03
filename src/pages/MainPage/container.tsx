import React, { useEffect } from 'react';
import MainPage from './index';
import { Memo } from '../../stores/Memos/types';
import { RootState } from '../../stores';
import { useDispatch, useSelector } from 'react-redux';
import { createMemo, loadMemos, saveMemo, selectMemo } from '../../stores/Memos/actions';
import { User } from 'firebase';
import { Redirect } from 'react-router';
import { logout } from '../../stores/Users/actions';

const MainPageContainer: React.FC = () => {
  const user = useSelector<RootState, User | undefined>(state => state.user.user);
  const memos = useSelector<RootState, Memo[]>(state => state.memo.memos);
  const selectedMemo = useSelector<RootState, Memo | undefined>(state => state.memo.selectedMemo);

  const dispatch = useDispatch();
  useEffect(() => {
    if (user !== undefined) {
      dispatch(loadMemos(user.uid));
    }
  }, [dispatch, user]);

  const onClickLogout = React.useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  const onClickAddMemo = React.useCallback(() => {
    if (user !== undefined) {
      dispatch(createMemo(user.uid));
    }
  }, [dispatch, user]);
  const onSelectMemo = React.useCallback(memo => dispatch(selectMemo(memo.uuid)), [dispatch]);
  const onChangeMemoContent = React.useCallback(
    content => {
      if (user !== undefined && selectedMemo !== undefined) {
        dispatch(saveMemo(user.uid, selectedMemo.uuid, content));
      }
    },
    [dispatch, user, selectedMemo]
  );

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
