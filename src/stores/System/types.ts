export interface SystemState {
  loading: boolean;
}

export const SYSTEM_LOADING = 'SYSTEM_LOADING';

interface SystemLoadingAction {
  type: typeof SYSTEM_LOADING;
  payload: {
    loading: boolean;
  };
}

export type SystemActionTypes = SystemLoadingAction;
