import { CLEAR_USER, LOADING_USER, SAVE_USER, UserActionTypes, UserState } from './types';

const initialState: UserState = {
  loading: true,
  user: undefined,
};

export function userReducer(state = initialState, action: UserActionTypes): UserState {
  switch (action.type) {
    case LOADING_USER:
      return { ...state, loading: action.payload.loading };
    case SAVE_USER:
      return { ...state, user: action.payload.user };
    case CLEAR_USER:
      return { ...state, user: undefined };
    default:
      return state;
  }
}
