import React, { FC, useReducer, useEffect, ChangeEvent, useState } from "react";

import { reducer, initialState, loadUsers } from "../../simple-redux/";

import "./App.css";

import { UsersList } from "../users";
import { Input } from "../common/input";

export const App: FC<any> = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    loadUsers(dispatch);
  }, []);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Users</h1>
      <Input name="users" type="text" onChange={onChange} />
      <UsersList
        users={state.users}
        inputValue={inputValue}
        error={state.error}
        isLoading={state.isLoading}
      />
    </div>
  );
};
