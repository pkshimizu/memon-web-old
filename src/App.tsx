import React from 'react';
import { Switch, Route } from 'react-router';
import LoginContainer from './pages/LoginPage/container';
import MainPageContainer from './pages/MainPage/container';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact={true} path={'/login'} component={LoginContainer} />
      <Switch>
        <Route exact={true} path={'/'} component={MainPageContainer} />
      </Switch>
    </Switch>
  );
};

export default App;
