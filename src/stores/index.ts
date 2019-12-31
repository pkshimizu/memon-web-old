import { memoReducer } from './Memos/reducers';
import { userReducer } from './Users/reducers';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import firebase from '../firebase';
import { systemReducer } from './System/reducers';

const rootReducer = combineReducers({
  system: systemReducer,
  memo: memoReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
middlewares.push(thunk.withExtraArgument({ getFirebase, getFirestore }));

const store = createStore(rootReducer, compose(applyMiddleware(...middlewares), reduxFirestore(firebase)));

export default store;
