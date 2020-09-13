import { Action, createReducer, on } from '@ngrx/store';

import { login, logout } from '../actions';
import { IAuthState } from '../state.models';

export const initialState: IAuthState = {
  username: null,
  isAuthorized: false
};

const reducer = createReducer(
  initialState,
  on(login, (state, action) => ({ ...state, username: action.username })),
  on(logout, () => initialState)
);

export function authReducer(state: IAuthState, action: Action) {
  return reducer(state, action);
}
