import * as actionTypes from "./actionTypes";
import { getUsers } from "../../api";

export const loadingUsers = () => {
  return { type: actionTypes.LOADING_USERS };
};

export const loadingUsersSucces = (users: any) => {
  return {
    type: actionTypes.LOADING_USERS_SUCCESS,
    users,
  };
};

export const loadingUsersError = (error: string) => {
  return {
    type: actionTypes.LOADING_USERS_ERROR,
    error,
  };
};

export const loadUsers = async (dispatch: any) => {
  dispatch(loadingUsers());
  try {
    const [error, users] = await getUsers();
    if (error) return dispatch(loadingUsersError(error));
    dispatch(loadingUsersSucces(users));
  } catch (err) {
    return dispatch(loadingUsersError("Unexpected error"));
  }
};
