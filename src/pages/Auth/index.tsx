import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores';
import { User } from 'firebase';
import { Redirect } from 'react-router';

interface AuthProps {}

const Auth: React.FC<AuthProps> = ({ children }) => {
  const user = useSelector<RootState, User | undefined>(state => state.user.user);
  if (user === undefined) {
    return <Redirect to={'login'} />;
  }
  return <>{children}</>;
};

export default Auth;
