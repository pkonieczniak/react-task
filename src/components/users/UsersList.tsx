import React, { FC } from "react";
import { Spinner } from "../common";

export const UsersList: FC<any> = (props) => {
  if (props.isLoading) return <Spinner />;
  if (props.error) return <p>props.error</p>;
  if (!props.users || !props.users.length)
    return <p>No users found based on the search criteria. Try again</p>;

  let filteredList = [...props.users];
  if (props.inputValue) {
    filteredList = props.users.filter((user: any) =>
      user.name.toLowerCase().includes(props.inputValue.toLowerCase())
    );
  }

  return (
    <ol>
      {filteredList.map((user: any) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ol>
  );
};
