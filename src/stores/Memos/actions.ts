import {CREATE_MEMO, DELETE_MEMO, LOAD_MEMOS, Memo, MemoActionTypes, SAVE_MEMO, SELECT_MEMO} from "./types";

export function loadMemos(): MemoActionTypes {
  return {
    type: LOAD_MEMOS
  }
}

export function createMemos(): MemoActionTypes {
  return {
    type: CREATE_MEMO
  }
}

export function saveMemos(memo: Memo): MemoActionTypes {
  return {
    type: SAVE_MEMO,
    payload: memo
  }
}

export function deleteMemos(memo: Memo): MemoActionTypes {
  return {
    type: DELETE_MEMO,
    payload: memo
  }
}

export function selectMemos(memo: Memo): MemoActionTypes {
  return {
    type: SELECT_MEMO,
    payload: memo
  }
}

