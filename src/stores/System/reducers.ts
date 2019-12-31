import { SYSTEM_LOADING, SystemActionTypes, SystemState } from './types';

const initialState: SystemState = {
  loading: false,
};

export const systemReducer = (state = initialState, action: SystemActionTypes): SystemState => {
  switch (action.type) {
    case SYSTEM_LOADING:
      return { ...state, loading: action.payload.loading };
    default:
      return state;
  }
};
