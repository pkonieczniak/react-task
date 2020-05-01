import React, { FC, useReducer, useEffect } from "react";

import { userReducer } from "../../simple-redux/userReducer";
import { initialState } from "../../simple-redux/initialState";
import { loadUsers } from "../../simple-redux/userActions";

import "./App.css";

import { UsersList } from "../users";

export const App: FC<any> = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    loadUsers(dispatch);
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <UsersList
        users={state.users}
        error={state.error}
        isLoading={state.isLoading}
      />
    </div>
  );
};
