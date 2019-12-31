import { ThunkAction } from 'redux-thunk';
import { SYSTEM_LOADING, SystemActionTypes } from './types';
import { RootState } from '../index';

export const loading = (status: boolean): ThunkAction<void, RootState, any, SystemActionTypes> => {
  return dispatch => {
    dispatch({
      type: SYSTEM_LOADING,
      payload: {
        loading: status,
      },
    });
  };
};
