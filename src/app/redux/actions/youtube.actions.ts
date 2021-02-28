import { createAction, props } from '@ngrx/store';

import { ICard } from '../../youtube/models/card';
import { ILocalVideoItem } from '../state.models';

export const toggleFilter = createAction('toggleFilter');

export const searchVideos = createAction('searchVideos', props<{ payload: string } >());

export const fetchVideos = createAction('fetchVideos', props<{ payload: ICard<string>[] } >());

export const getVideo = createAction('getVideo', props<{ payload: ICard<string>}>());

export const createVideo = createAction('createVideo', props<{ payload: ILocalVideoItem }>());
