import { CREATE_MEMO, DELETE_MEMO, LOAD_MEMOS, MemoActionTypes, SAVE_MEMO, SELECT_MEMO } from './types';

export function loadMemos(): MemoActionTypes {
  return {
    type: LOAD_MEMOS,
  };
}

export function createMemo(): MemoActionTypes {
  return {
    type: CREATE_MEMO,
  };
}

export function saveMemo(uuid: string, content: string): MemoActionTypes {
  return {
    type: SAVE_MEMO,
    payload: {
      uuid: uuid,
      content: content,
    },
  };
}

export function deleteMemos(uuid: string): MemoActionTypes {
  return {
    type: DELETE_MEMO,
    payload: {
      uuid: uuid,
    },
  };
}

export function selectMemo(uuid: string): MemoActionTypes {
  return {
    type: SELECT_MEMO,
    payload: {
      uuid: uuid,
    },
  };
}
