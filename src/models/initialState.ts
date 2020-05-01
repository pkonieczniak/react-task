import { User } from "./user";

export interface InitialState {
  users: User[];
  isLoading: boolean;
  error: string;
}
