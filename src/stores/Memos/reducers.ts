import {
  CREATE_MEMO,
  DELETE_MEMO,
  LOAD_MEMOS,
  Memo,
  MemoActionTypes,
  MemosState,
  SAVE_MEMO,
  SELECT_MEMO,
} from './types';
import _ from 'lodash';

const initialState: MemosState = {
  memos: [],
  selectedMemo: undefined,
};

export function memoReducer(state = initialState, action: MemoActionTypes): MemosState {
  switch (action.type) {
    case LOAD_MEMOS:
      return state;
    case CREATE_MEMO:
      return {
        ...state,
        memos: _.concat(state.memos, {
          id: 0,
          title: '',
          content: '',
          createdAt: '2019-12-09T12:34:56',
          updatedAt: '2019-12-09T12:34:56',
        }),
      };
    case SAVE_MEMO:
      return {
        ...state,
        memos: _.map(state.memos, (memo: Memo) => {
          if (action.payload.id === memo.id) {
            return action.payload;
          }
          return memo;
        }),
      };
    case DELETE_MEMO:
      return { ...state, memos: _.filter(state.memos, (memo: Memo) => action.payload.id !== memo.id) };
    case SELECT_MEMO:
      return { ...state, selectedMemo: action.payload };
    default:
      return state;
  }
}
