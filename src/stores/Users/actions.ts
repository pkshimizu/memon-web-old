import { USER_CLEAR, USER_UPDATE, UserActionTypes } from './types';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../index';
import { User } from 'firebase';
import { loading } from '../System/actions';

export const loadUser = (): ThunkAction<void, RootState, any, UserActionTypes> => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(loading(true));
    getFirebase()
      .auth()
      .onAuthStateChanged((user: User) => {
        dispatch({
          type: USER_UPDATE,
          payload: {
            user: user === null ? undefined : user,
          },
        });
        dispatch(loading(false));
      });
  };
};

export const login = (email: string, password: string): ThunkAction<void, RootState, any, UserActionTypes> => {
  return (dispatch, getState, { getFirebase }) => {
    getFirebase()
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res: any) => {
        dispatch({
          type: USER_UPDATE,
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
          type: USER_CLEAR,
        });
      });
  };
};
