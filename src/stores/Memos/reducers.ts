import {CREATE_MEMO, DELETE_MEMO, LOAD_MEMOS, MemoActionTypes, MemosState, SAVE_MEMO, SELECT_MEMO} from "./types";

const initialState: MemosState = {
  memos: [],
  selectedMemo: undefined
};

export function memoReducer(
  state = initialState,
  action: MemoActionTypes
): MemosState {
  switch (action.type) {
    case LOAD_MEMOS:
      return state;
    case CREATE_MEMO:
      return state;
    case SAVE_MEMO:
      return state;
    case DELETE_MEMO:
      return state;
    case SELECT_MEMO:
      return state;
    default:
      return state;
  }
}
