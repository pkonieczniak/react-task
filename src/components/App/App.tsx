import React, {
  FC,
  useReducer,
  useEffect,
  useState,
  useCallback,
  ChangeEvent,
} from "react";

import { InitialState } from "../../models/initialState";
import { reducer, initialState, loadUsers } from "../../simple-redux/";
import { UsersSearch } from "../users";

import "./App.css";

export const App: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    loadUsers(dispatch);
  }, []);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const filteredUsersSelector = useCallback(
    (state: InitialState) => {
      if (!state.users) return [];
      return state.users
        .filter((user) =>
          user.name.toLowerCase().includes(inputValue.toLowerCase())
        )
        .map((user) => ({
          id: user.id,
          username: user.username,
          name: user.name,
        }));
    },
    [inputValue]
  );

  return (
    <div>
      <h1>Users</h1>
      <UsersSearch
        onChange={onChange}
        users={filteredUsersSelector(state)}
        inputValue={inputValue}
        error={state.error || ""}
        isLoading={state.isLoading}
      />
    </div>
  );
};
