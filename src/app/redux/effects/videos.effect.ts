import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, debounceTime, switchMap } from 'rxjs/operators';

import { CardListService } from '../../youtube/services/card-list.service';
import { searchVideos, fetchVideos } from '../actions';
import { IResponse } from '../../youtube/models/card';

@Injectable()
export class VideoEffects {

  loadVideos$ = createEffect(() => this.actions$.pipe(
    ofType(searchVideos),
    debounceTime(500),
    switchMap(({ payload: query }) => {
      return this.cardListService.searchVideoByQuery(query)
        .pipe(
          switchMap((ids: string[]) =>
            this.cardListService.getStatistics(ids).pipe(
              map((videos: IResponse<string>) => fetchVideos({ payload: videos.items }))
            )),
          catchError(() => EMPTY)
        );
    })
    )
  );

  constructor(
    private actions$: Actions,
    private cardListService: CardListService
  ) {}
}
