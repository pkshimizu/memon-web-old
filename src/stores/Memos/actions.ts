import { CREATE_MEMO, DELETE_MEMO, LOAD_MEMOS, Memo, MemoActionTypes, SAVE_MEMO, SELECT_MEMO } from './types';
import { uuid } from 'uuidv4';
import moment from 'moment';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../index';

export function newMemo(): Memo {
  return {
    uuid: uuid(),
    title: '',
    content: '',
    createdAt: moment().format('YYYY-MM-DDThh:mm:ss'),
    updatedAt: moment().format('YYYY-MM-DDThh:mm:ss'),
  };
}

export function loadMemos(): MemoActionTypes {
  return {
    type: LOAD_MEMOS,
  };
}

export const createMemo = (): ThunkAction<void, RootState, any, MemoActionTypes> => {
  return (dispatch, getState, { getFirestore }) => {
    const memo = newMemo();
    getFirestore()
      .collection('memos')
      .add(memo)
      .then(() => {
        dispatch({
          type: CREATE_MEMO,
          payload: {
            memo: memo,
          },
        });
      });
  };
};

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
