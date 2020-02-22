import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router as ReactRouter, Switch } from 'react-router';
import store from '../../stores';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from '../../firebase';
import LoginContainer from '../LoginPage/container';
import MainPageContainer from '../MainPage/container';
// tslint:disable-next-line:no-implicit-dependencies
import { createBrowserHistory } from 'history';
import Auth from '../Auth';

interface RouterProps {}

const Router: React.FC<RouterProps> = props => {
  const history = createBrowserHistory();
  return (
    <Provider store={store}>
      <ReactRouter history={history}>
        <ReactReduxFirebaseProvider firebase={firebase} config={{}} dispatch={store.dispatch}>
          <Switch>
            <Route exact={true} path={'/login'} component={LoginContainer} />
            <Auth>
              <Switch>
                <Route exact={true} path={'/'} component={MainPageContainer} />
              </Switch>
            </Auth>
          </Switch>
        </ReactReduxFirebaseProvider>
      </ReactRouter>
    </Provider>
  );
};

export default Router;
