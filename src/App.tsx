import React from 'react';
import { Switch, Route } from 'react-router';
import LoginContainer from './pages/LoginPage/container';
import Auth from './Auth';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact={true} path={'/login'} component={LoginContainer} />
      <Auth />
    </Switch>
  );
};

export default App;
