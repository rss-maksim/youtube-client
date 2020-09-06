import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Subject, Observable, interval, of } from 'rxjs';
import { map, debounce, switchMap } from 'rxjs/operators';

import { ICard, IResponse, IId } from '../models/card';
import { defaultSort } from '../components/sorting-panel/constants';
import { API_SEARCH_URL, API_KEY, API_VIDEO_URL } from '../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class CardListService {
  search$ = new Subject();
  items$ = new BehaviorSubject([]);
  items: ICard<string>[] = [];
  sort$ = new BehaviorSubject(defaultSort);

  constructor(private http: HttpClient) {
    this.search$
      .pipe(debounce(() => interval(500)))
      .subscribe((value: string) => {
        this.searchVideoByQuery(value)
          .subscribe((videoIds: string[]) => this.getStatistics(videoIds)
            .subscribe(({ items }: IResponse<string>) => {
              this.items = items;
              this.items$.next(items);
            }));
      });
  }

  getCard(id: string): Observable<ICard<string>> {
    return this.getStatistics(id).pipe(switchMap((data: IResponse<string>) => of(data.items[0])));
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
