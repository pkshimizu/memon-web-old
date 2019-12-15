import { memoReducer } from './Memos/reducers';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';

const rootReducer = combineReducers({
  memo: memoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
