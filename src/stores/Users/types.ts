import { User } from 'firebase';

export interface UserState {
  user: User | undefined;
}

export const SAVE_USER = 'SAVE_USER';
export const CLEAR_USER = 'CLEAR_USER';

interface SaveUserAction {
  type: typeof SAVE_USER;
  payload: {
    user: User | undefined;
  };
}

interface ClearUserAction {
  type: typeof CLEAR_USER;
}

export type UserActionTypes = SaveUserAction | ClearUserAction;
