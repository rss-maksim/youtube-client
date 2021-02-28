import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { ICard, IResponse, IId } from '../models/card';
import { defaultSort } from '../components/sorting-panel/constants';
import { API_SEARCH_URL, API_VIDEO_URL } from '../../shared/constants';
import { AppState } from '../../redux/state.models';

@Injectable({
  providedIn: 'root'
})
export class CardListService {
  search$ = new Subject();
  items$ = new BehaviorSubject([]);
  items: ICard<string>[] = [];
  sort$ = new BehaviorSubject(defaultSort);

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  getCard(id: string): Observable<ICard<string>> {
    return this.getStatistics(id)
      .pipe(
        switchMap((data: IResponse<string>) => of(data.items[0]))
      );
  }

  searchVideoByQuery(qeury: string): Observable<string[]> {
    const params: any = {
      type: 'video',
      part: 'snippet',
      maxResults: 15,
      q: qeury
    };
    return this.http.get<IResponse<IId>>(API_SEARCH_URL, { params }).pipe(
      map((data) => data.items.map(({ id }) => id.videoId))
    );
  }

  getStatistics(ids: string[] | string): Observable<any> {
    const id = typeof ids === 'string' ? ids : ids.join(',');
    const params: any = {
      id,
      part: 'snippet,statistics'
    };

    return this.http.get(API_VIDEO_URL, { params });
  }
}
