import { CLEAR_USER, SAVE_USER, UserActionTypes, UserState } from './types';

const initialState: UserState = {
  user: undefined,
};

export function userReducer(state = initialState, action: UserActionTypes): UserState {
  switch (action.type) {
    case SAVE_USER:
      return { ...state, user: action.payload.user };
    case CLEAR_USER:
      return { ...state, user: undefined };
    default:
      return state;
  }
}
