import { fetch } from "../../utils";
import { User } from "../../models/user";

const resource = "users";

export const getUsers = () => {
  return fetch<[User]>(
    `${process.env.REACT_APP_JSON_PLACEHOLDER_API_URL}${resource}`
  );
};
