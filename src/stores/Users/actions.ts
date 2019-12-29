import { CLEAR_USER, SAVE_USER, UserActionTypes } from './types';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../index';

export const login = (email: string, password: string): ThunkAction<void, RootState, any, UserActionTypes> => {
  return (dispatch, getState, { getFirebase }) => {
    getFirebase()
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res: any) => {
        dispatch({
          type: SAVE_USER,
          payload: {
            user: res.user === null ? undefined : res.user!,
          },
        });
      });
  };
};

export const logout = (): ThunkAction<void, RootState, any, UserActionTypes> => {
  return (dispatch, getState, { getFirebase }) => {
    getFirebase()
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: CLEAR_USER,
        });
      });
  };
};
