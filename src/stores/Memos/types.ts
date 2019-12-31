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

export const MEMOS_LOAD = 'MEMOS_LOAD';
export const MEMOS_ADD = 'MEMOS_ADD';
export const MEMOS_SAVE = 'MEMOS_SAVE';
export const MEMOS_REMOVE = 'MEMOS_REMOVE';
export const MEMOS_SELECT = 'MEMOS_SELECT';

interface MemosLoadAction {
  type: typeof MEMOS_LOAD;
}

interface MemoAddAction {
  type: typeof MEMOS_ADD;
  payload: {
    memo: Memo;
  };
}

interface MemoSaveAction {
  type: typeof MEMOS_SAVE;
  payload: {
    uuid: string;
    content: string;
  };
}

interface MemoRemoveAction {
  type: typeof MEMOS_REMOVE;
  payload: {
    uuid: string;
  };
}

interface MemoSelectAction {
  type: typeof MEMOS_SELECT;
  payload: {
    uuid: string;
  };
}

export type MemoActionTypes = MemosLoadAction | MemoAddAction | MemoSaveAction | MemoRemoveAction | MemoSelectAction;
