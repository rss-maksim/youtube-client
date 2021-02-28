import { Action, createReducer, on } from '@ngrx/store';

import { createVideo, fetchVideos, toggleFilter } from '../actions';
import { IVideosState } from '../state.models';
import { transformToYoutubeCard } from '../helpers';

export const initialState: IVideosState = {
  videos: [],
  localVideos: [],
  filterIsOpen: false
};

const reducer = createReducer(
  initialState,
  on(fetchVideos, (state, action) => ({ ...state, videos: action.payload })),
  on(createVideo, (state, action) => ({ ...state, localVideos: [...state.localVideos, transformToYoutubeCard(action.payload)]})),
  on(toggleFilter, (state) => ({ ...state, filterIsOpen: !state.filterIsOpen }))
);

export function videosReducer(state: IVideosState, action: Action) {
  return reducer(state, action);
}
