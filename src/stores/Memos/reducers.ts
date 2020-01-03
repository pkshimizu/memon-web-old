import {
  MEMOS_ADD,
  MEMOS_REMOVE,
  MEMOS_SET,
  Memo,
  MemoActionTypes,
  MemosState,
  MEMOS_SAVE,
  MEMOS_SELECT,
} from './types';
import _ from 'lodash';
import { getTitle } from './actions';

const initialState: MemosState = {
  memos: [],
  selectedMemo: undefined,
};

export function memoReducer(state = initialState, action: MemoActionTypes): MemosState {
  switch (action.type) {
    case MEMOS_SET:
      return {
        ...state,
        memos: action.payload.memos,
        selectedMemo: action.payload.memos[0],
      };
    case MEMOS_ADD:
      const memo = action.payload.memo;
      return {
        ...state,
        memos: [memo, ...state.memos],
        selectedMemo: memo,
      };
    case MEMOS_SAVE:
      return {
        ...state,
        memos: _.map(state.memos, (memo: Memo) => {
          if (action.payload.uuid === memo.uuid) {
            return {
              ...memo,
              title: getTitle(action.payload.content),
              content: action.payload.content,
              updatedAt: action.payload.updatedAt,
            };
          }
          return memo;
        }),
        selectedMemo:
          state.selectedMemo === undefined
            ? undefined
            : {
                ...state.selectedMemo,
                title: getTitle(action.payload.content),
                content: action.payload.content,
                updatedAt: action.payload.updatedAt,
              },
      };
    case MEMOS_REMOVE:
      const memos = state.memos.filter((memo: Memo) => action.payload.uuid !== memo.uuid);
      const selectedMemo = memos.length === 0 ? undefined : memos[0];
      return { ...state, memos: memos, selectedMemo: selectedMemo };
    case MEMOS_SELECT:
      return {
        ...state,
        selectedMemo: state.memos[_.findIndex(state.memos, { uuid: action.payload.uuid })],
      };
    default:
      return state;
  }
}
