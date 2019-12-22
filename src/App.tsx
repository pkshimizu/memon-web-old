import React from 'react';
import MainPageContainer from './pages/MainPage/container';
import { Switch, Route } from 'react-router';
import LoginContainer from './pages/LoginPage/container';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path={'/login'} component={LoginContainer} />
      <Route path={'/'} component={MainPageContainer} />
    </Switch>
  );
};

export default App;
