import { createSelector, createFeatureSelector } from '@ngrx/store';

import { AppState, IAuthState } from '../state.models';

export const featureKey = 'auth';

export const selectAuth = createFeatureSelector<AppState, IAuthState>(featureKey);

export const selectAuthState = createSelector(
  selectAuth,
  (state: IAuthState) => state
);
