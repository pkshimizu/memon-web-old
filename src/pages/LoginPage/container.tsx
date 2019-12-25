import React from 'react';
import LoginPage from './index';
import firebase from '../../firebase';

const LoginContainer: React.FC = () => {
  const onClickLogin = React.useCallback((email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
      });
  }, []);
  return <LoginPage onClickLogin={onClickLogin} />;
};

export default LoginContainer;
