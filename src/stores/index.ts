import { memoReducer } from './Memos/reducers';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  memo: memoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
