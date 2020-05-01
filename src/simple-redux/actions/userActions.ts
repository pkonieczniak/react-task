import * as actionTypes from "./actionTypes";
import { getUsers } from "../../api";

import { User } from "../../models/user";
import { InitialState } from "../../models/initialState";
import { Action } from "../../models/action";

export const loadingUsers = (): Action<InitialState> => {
  return {
    type: actionTypes.LOADING_USERS,
    payload: {},
  };
};

export const loadingUsersSucces = (
  users: User[] | undefined
): Action<InitialState> => {
  return {
    type: actionTypes.LOADING_USERS_SUCCESS,
    payload: { users },
  };
};

export const loadingUsersError = (error: string): Action<InitialState> => {
  return {
    type: actionTypes.LOADING_USERS_ERROR,
    payload: { error },
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
