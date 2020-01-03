export interface Memo {
  uuid: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface MemosState {
  memos: Memo[];
  selectedMemo: Memo | undefined;
}

export const MEMOS_SET = 'MEMOS_SET';
export const MEMOS_ADD = 'MEMOS_ADD';
export const MEMOS_SAVE = 'MEMOS_SAVE';
export const MEMOS_REMOVE = 'MEMOS_REMOVE';
export const MEMOS_SELECT = 'MEMOS_SELECT';

interface MemosSetAction {
  type: typeof MEMOS_SET;
  payload: {
    memos: Memo[];
  };
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
    updatedAt: string;
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

export type MemoActionTypes = MemosSetAction | MemoAddAction | MemoSaveAction | MemoRemoveAction | MemoSelectAction;
