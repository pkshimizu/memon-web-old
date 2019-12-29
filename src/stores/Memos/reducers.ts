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
import { newMemo } from './actions';

const defaultMemo = newMemo();

const initialState: MemosState = {
  memos: [defaultMemo],
  selectedMemo: defaultMemo,
};

const getTitle = (content: string) => {
  const index = content.indexOf('\n');
  if (index < 0) {
    return content;
  }
  return content.slice(0, index);
};

export function memoReducer(state = initialState, action: MemoActionTypes): MemosState {
  switch (action.type) {
    case LOAD_MEMOS:
      return state;
    case CREATE_MEMO:
      const memo = action.payload.memo;
      return {
        ...state,
        memos: [memo, ...state.memos],
        selectedMemo: memo,
      };
    case SAVE_MEMO:
      return {
        ...state,
        memos: _.map(state.memos, (memo: Memo) => {
          if (action.payload.uuid === memo.uuid) {
            return { ...memo, title: getTitle(action.payload.content), content: action.payload.content };
          }
          return memo;
        }),
        selectedMemo: {
          ...state.selectedMemo,
          title: getTitle(action.payload.content),
          content: action.payload.content,
        },
      };
    case DELETE_MEMO:
      return { ...state, memos: _.filter(state.memos, (memo: Memo) => action.payload.uuid !== memo.uuid) };
    case SELECT_MEMO:
      return {
        ...state,
        selectedMemo: state.memos[_.findIndex(state.memos, { uuid: action.payload.uuid })],
      };
    default:
      return state;
  }
}
