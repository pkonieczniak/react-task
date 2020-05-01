import {
  LOADING_USERS,
  LOADING_USERS_ERROR,
  LOADING_USERS_SUCCESS,
} from "../actions/actionTypes";
import { InitialState } from "../../models/initialState";
import { UserAction } from "../../models/userAction";

export const userReducer = (
  state: InitialState,
  { type, payload }: UserAction
) => {
  const { error, users } = payload;

  switch (type) {
    case LOADING_USERS:
      return {
        ...state,
        isLoading: true,
      };
    case LOADING_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users,
      };
    case LOADING_USERS_ERROR:
      return {
        ...state,
        isLoading: false,
        error,
      };
    default:
      return state;
  }
};
