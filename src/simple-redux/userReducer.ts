import * as actionTypes from "./actionTypes";

export const userReducer = (state: any, action: any) => {
  if (actionTypes.LOADING_USERS) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (actionTypes.LOADING_USERS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      users: action.users,
    };
  }
  if (actionTypes.LOADING_USERS_ERROR) {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  }
  return state;
};
