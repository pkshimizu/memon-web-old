import { USER_CLEAR, USER_UPDATE, UserActionTypes, UserState } from './types';

const initialState: UserState = {
  user: undefined,
};

export function userReducer(state = initialState, action: UserActionTypes): UserState {
  switch (action.type) {
    case USER_UPDATE:
      return { ...state, user: action.payload.user };
    case USER_CLEAR:
      return { ...state, user: undefined };
    default:
      return state;
  }
}
