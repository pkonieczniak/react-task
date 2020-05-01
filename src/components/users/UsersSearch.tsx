import React, { FC, ChangeEvent, Fragment } from "react";
import { User } from "../../models/user";
import { Input } from "../common/input";
import { UsersList } from "./UsersList";

interface UsersSearchProps {
  onChange(event: ChangeEvent<HTMLInputElement>): void;
  users: Pick<User, "id" | "name" | "username">[];
  inputValue: string;
  error: string;
  isLoading: boolean;
}

export const UsersSearch: FC<UsersSearchProps> = ({
  onChange,
  users,
  inputValue,
  error,
  isLoading,
}) => {
  return (
    <Fragment>
      <Input name="users" type="text" onChange={onChange} value={inputValue} />
      <UsersList users={users} error={error} isLoading={isLoading} />
    </Fragment>
  );
};
