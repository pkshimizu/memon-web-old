export interface Memo {
  uuid: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface MemosState {
  memos: Memo[];
  selectedMemo: Memo;
}

export const LOAD_MEMOS = 'LOAD_MEMOS';
export const CREATE_MEMO = 'CREATE_MEMO';
export const SAVE_MEMO = 'SAVE_MEMO';
export const DELETE_MEMO = 'DELETE_MEMO';
export const SELECT_MEMO = 'SELECT_MEMO';

interface LoadMemosAction {
  type: typeof LOAD_MEMOS;
}

interface CreateMemoAction {
  type: typeof CREATE_MEMO;
}

interface SaveMemoAction {
  type: typeof SAVE_MEMO;
  payload: {
    uuid: string;
    content: string;
  };
}

interface DeleteMemoAction {
  type: typeof DELETE_MEMO;
  payload: {
    uuid: string;
  };
}

interface SelectMemoAction {
  type: typeof SELECT_MEMO;
  payload: {
    uuid: string;
  };
}

export type MemoActionTypes = LoadMemosAction | CreateMemoAction | SaveMemoAction | DeleteMemoAction | SelectMemoAction;
