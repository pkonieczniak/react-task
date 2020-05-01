import {
  LOADING_USERS,
  LOADING_USERS_ERROR,
  LOADING_USERS_SUCCESS,
} from "../actions/actionTypes";

export const userReducer = (state: any, action: any) => {
  if (action.type === LOADING_USERS) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === LOADING_USERS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      users: action.users,
    };
  }
  if (action.type === LOADING_USERS_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  }
  return state;
};
