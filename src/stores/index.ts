import { memoReducer } from './Memos/reducers';
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
  memo: memoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
