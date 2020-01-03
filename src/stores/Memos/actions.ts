import { MEMOS_ADD, MEMOS_REMOVE, Memo, MemoActionTypes, MEMOS_SAVE, MEMOS_SELECT } from './types';
import { uuid } from 'uuidv4';
import moment from 'moment';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../index';
import firebase from 'firebase';

const dateFormat = 'YYYY-MM-DDTHH:mm:ss';

interface MemoDocument {
  content: string;
  createdAt: firebase.firestore.Timestamp;
  updatedAt: firebase.firestore.Timestamp;
}

export const newMemo = (): Memo => {
  return {
    uuid: uuid(),
    title: '',
    content: '',
    createdAt: moment().format(dateFormat),
    updatedAt: moment().format(dateFormat),
  };
};

const toMemo = (id: string, doc: MemoDocument): Memo => {
  return {
    uuid: id,
    title: getTitle(doc.content),
    content: doc.content,
    createdAt: moment(doc.createdAt.toMillis()).format(dateFormat),
    updatedAt: moment(doc.updatedAt.toMillis()).format(dateFormat),
  };
};

const toDoc = (memo: Memo): MemoDocument => {
  return {
    content: memo.content,
    createdAt: firebase.firestore.Timestamp.fromDate(moment(memo.createdAt, dateFormat).toDate()),
    updatedAt: firebase.firestore.Timestamp.fromDate(moment(memo.updatedAt, dateFormat).toDate()),
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
    const firestore = getFirestore();
    firestore
      .doc(`/users/${uid}`)
      .collection('memos')
      .onSnapshot((snapshot: firebase.firestore.QuerySnapshot<MemoDocument>) => {
        snapshot.docChanges().forEach(({ doc, type }) => {
          switch (type) {
            case 'added':
              dispatch({
                type: MEMOS_ADD,
                payload: {
                  memo: toMemo(doc.id, doc.data()),
                },
              });
              return;
            case 'modified':
              dispatch({
                type: MEMOS_SAVE,
                payload: {
                  uuid: doc.id,
                  content: doc.data().content,
                },
              });
              return;
            case 'removed':
              dispatch({
                type: MEMOS_REMOVE,
                payload: {
                  uuid: doc.id,
                },
              });
              return;
          }
        });
      });
  };
};

export const createMemo = (uid: string): ThunkAction<void, RootState, any, MemoActionTypes> => {
  return (dispatch, getState, { getFirestore }) => {
    const memo = newMemo();
    getFirestore()
      .doc(`/users/${uid}`)
      .collection('memos')
      .add(toDoc(memo));
  };
};

export const saveMemo = (
  uid: string,
  memoUuid: string,
  content: string
): ThunkAction<void, RootState, any, MemoActionTypes> => {
  return (dispatch, getState, { getFirestore }) => {
    getFirestore()
      .collection(`/users/${uid}/memos`)
      .doc(`${memoUuid}`)
      .update({ content: content });
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
