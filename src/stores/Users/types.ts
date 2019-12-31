import { User } from 'firebase';

export interface UserState {
  user: User | undefined;
}

export const USER_UPDATE = 'USER_UPDATE';
export const USER_CLEAR = 'USER_CLEAR';

interface UserUpdateAction {
  type: typeof USER_UPDATE;
  payload: {
    user: User | undefined;
  };
}

interface UserClearAction {
  type: typeof USER_CLEAR;
}

export type UserActionTypes = UserUpdateAction | UserClearAction;
