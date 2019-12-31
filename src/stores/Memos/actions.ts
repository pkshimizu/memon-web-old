import { MEMOS_ADD, MEMOS_REMOVE, MEMOS_LOAD, Memo, MemoActionTypes, MEMOS_SAVE, MEMOS_SELECT } from './types';
import { uuid } from 'uuidv4';
import moment from 'moment';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../index';

export const newMemo = (): Memo => {
  return {
    uuid: uuid(),
    title: '',
    content: '',
    createdAt: moment().format('YYYY-MM-DDThh:mm:ss'),
    updatedAt: moment().format('YYYY-MM-DDThh:mm:ss'),
  };
};

export const loadMemos = (): ThunkAction<void, RootState, any, MemoActionTypes> => {
  return dispatch => {
    dispatch({
      type: MEMOS_LOAD,
    });
  };
};

export const createMemo = (): ThunkAction<void, RootState, any, MemoActionTypes> => {
  return (dispatch, getState, { getFirestore }) => {
    const memo = newMemo();
    getFirestore()
      .collection('memos')
      .add(memo)
      .then(() => {
        dispatch({
          type: MEMOS_ADD,
          payload: {
            memo: memo,
          },
        });
      });
  };
};

export const saveMemo = (memoUuid: string, content: string): ThunkAction<void, RootState, any, MemoActionTypes> => {
  return dispatch => {
    dispatch({
      type: MEMOS_SAVE,
      payload: {
        uuid: memoUuid,
        content: content,
      },
    });
  };
};

export const deleteMemos = (memoUuid: string): ThunkAction<void, RootState, any, MemoActionTypes> => {
  return dispatch => {
    dispatch({
      type: MEMOS_REMOVE,
      payload: {
        uuid: memoUuid,
      },
    });
  };
};

export const selectMemo = (memoUuid: string): ThunkAction<void, RootState, any, MemoActionTypes> => {
  return dispatch => {
    dispatch({
      type: MEMOS_SELECT,
      payload: {
        uuid: memoUuid,
      },
    });
  };
};
