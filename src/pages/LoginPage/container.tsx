import React from 'react';
import LoginPage from './index';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../stores/Users/actions';
import { User } from 'firebase';
import { RootState } from '../../stores';
import { Redirect } from 'react-router';

const LoginContainer: React.FC = () => {
  const user = useSelector<RootState, User | undefined>(state => state.user.user);

  const dispatch = useDispatch();
  const onClickLogin = React.useCallback(
    (email, password) => {
      dispatch(login(email, password));
    },
    [dispatch]
  );
  if (user !== undefined) {
    return <Redirect to={'/'} />;
  }
  return <LoginPage onClickLogin={onClickLogin} />;
};

export default LoginContainer;
