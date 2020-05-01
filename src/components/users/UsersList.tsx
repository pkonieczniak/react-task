import React, { FC } from "react";
import { Spinner } from "../common";

export const UsersList: FC<any> = (props) => {
  if (props.isLoading) return <Spinner />;
  if (props.error) return <p>props.error</p>;
  if (!props.users || !props.users.length)
    return <p>No users found based on the search criteria. Try again</p>;

  return (
    <ol>
      {props.users.map((user: any) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ol>
  );
};
