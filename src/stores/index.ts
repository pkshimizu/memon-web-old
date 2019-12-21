import { memoReducer } from './Memos/reducers';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';

const rootReducer = combineReducers({
  memo: memoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const composeEnhancers = composeWithDevTools({
  realtime: true,
  name: 'memon',
  hostname: 'localhost',
  port: 13000,
});

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;
