import React, { useState } from 'react';
import firebase from './firebase';
import { Redirect, Route, Switch } from 'react-router';
import PageLoading from './molecules/PageLoading';
import MainPageContainer from './pages/MainPage/container';

const Auth = () => {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  firebase.auth().onAuthStateChanged(user => {
    setLoading(false);
    setLoggedIn(user !== null);
  });
  if (loading) {
    return <PageLoading />;
  }
  if (loggedIn) {
    return (
      <Switch>
        <Route exact={true} path={'/'} component={MainPageContainer} />
      </Switch>
    );
  }
  return <Redirect to={'/login'} />;
};

export default Auth;
