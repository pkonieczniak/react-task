import React, { FC } from "react";
import { Spinner } from "../common";
import { User } from "../../models/user";

interface UsersListProps {
  users: Pick<User, "id" | "name" | "username">[];
  error: string;
  isLoading: boolean;
}

export const UsersList: FC<UsersListProps> = ({ isLoading, error, users }) => {
  if (isLoading) return <Spinner />;
  if (error) return <p>error</p>;
  if (!users || !users.length)
    return <p>No users found based on the search criteria. Try again</p>;

  return (
    <ol>
      {users.map(({ id, name, username }) => {
        return (
          <li key={id}>
            {name} @{username}
          </li>
        );
      })}
    </ol>
  );
};
