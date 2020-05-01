// TODO: Figure out why cannot encapsulate exports for actions and reducers
// TypeError: Cannot read property 'name' of undefined

export * from "./actions/actionTypes";
export { loadUsers } from "./actions/userActions";

export { initialState } from "./reducers/initialState";
export { userReducer as reducer } from "./reducers/userReducer";
