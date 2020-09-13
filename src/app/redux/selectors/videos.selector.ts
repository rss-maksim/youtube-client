import { createSelector, createFeatureSelector } from '@ngrx/store';

import { AppState, IVideosState } from '../state.models';

export const featureKey = 'videos';

export const selectVideos = createFeatureSelector<AppState, IVideosState>(featureKey);

export const selectVideosState = createSelector(
  selectVideos,
  (state: IVideosState) => [...state.videos, ...state.localVideos]
);

export const selectVideoItemState = createSelector(
  selectVideos,
  (state: IVideosState, props: { id: string }) =>
    [...state.videos, ...state.localVideos].find(({ id }) => id === props.id)
);
