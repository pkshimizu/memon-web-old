import { memoReducer } from './Memos/reducers';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';

const rootReducer = combineReducers({
  memo: memoReducer,
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

const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));

export default store;
