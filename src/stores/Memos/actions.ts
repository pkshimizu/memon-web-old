import { MEMOS_ADD, MEMOS_REMOVE, MEMOS_LOAD, Memo, MemoActionTypes, MEMOS_SAVE, MEMOS_SELECT } from './types';
import { uuid } from 'uuidv4';
import moment from 'moment';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../index';

interface MemoDocument {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export const newMemo = (): Memo => {
  return {
    uuid: uuid(),
    title: '',
    content: '',
    createdAt: moment().format('YYYY-MM-DDTHH:mm:ss'),
    updatedAt: moment().format('YYYY-MM-DDTHH:mm:ss'),
  };
};

export const getTitle = (content: string) => {
  const index = content.indexOf('\n');
  if (index < 0) {
    return content;
  }
  return content.slice(0, index);
};

export const loadMemos = (uid: string): ThunkAction<void, RootState, any, MemoActionTypes> => {
  return (dispatch, getState, { getFirestore }) => {
    getFirestore()
      .doc(`/users/${uid}`)
      .collection('memos')
      .get()
      // TODO QuerySnapshot がimportできないので、anyで回避
      .then((memoCollection: any) => {
        // TODO QueryDocumentSnapshot がimportできないので、anyで回避
        const memos = memoCollection.docs.map((doc: any) => ({
          uuid: doc.id,
          title: getTitle(doc.data().content),
          content: doc.data().content,
          createdAt: moment(doc.data().createdAt.toMillis()).format('YYYY-MM-DDTHH:mm:ss'),
          updatedAt: moment(doc.data().updatedAt.toMillis()).format('YYYY-MM-DDTHH:mm:ss'),
        }));
        dispatch({
          type: MEMOS_LOAD,
          payload: {
            memos: memos,
          },
        });
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
