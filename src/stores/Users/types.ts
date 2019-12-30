import { User } from 'firebase';

export interface UserState {
  loading: boolean;
  user: User | undefined;
}

export const LOADING_USER = 'LOADING_USER';
export const SAVE_USER = 'SAVE_USER';
export const CLEAR_USER = 'CLEAR_USER';

interface LoadingUserAction {
  type: typeof LOADING_USER;
  payload: {
    loading: boolean;
  };
}

interface SaveUserAction {
  type: typeof SAVE_USER;
  payload: {
    user: User | undefined;
  };
}

interface ClearUserAction {
  type: typeof CLEAR_USER;
}

export type UserActionTypes = LoadingUserAction | SaveUserAction | ClearUserAction;
