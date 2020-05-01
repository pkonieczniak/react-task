export interface Action<T> {
  type: string;
  payload: Partial<T>;
}
