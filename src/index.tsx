import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App/container';
import * as serviceWorker from './serviceWorker';
import store from './stores';
import { Router } from 'react-router';
// tslint:disable-next-line: no-implicit-dependencies
import { createBrowserHistory } from 'history';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from './firebase';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ReactReduxFirebaseProvider firebase={firebase} config={{}} dispatch={store.dispatch}>
        <App />
      </ReactReduxFirebaseProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
