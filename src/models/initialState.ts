import { User } from "./user";

export interface InitialState {
  users: User[] | undefined;
  isLoading: boolean;
  error: string | undefined;
}
