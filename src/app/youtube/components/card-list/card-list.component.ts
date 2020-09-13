import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { CardListService } from '../../services/card-list.service';
import { ICard } from '../../models/card';
import { ISort } from '../sorting-panel/sorting-panel.component';
import { AppState } from '../../../redux/state.models';
import { selectVideosState } from '../../../redux/selectors/videos.selector';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  cards$: Observable<ICard<string>[]>;
  sort: ISort;

  constructor(private store: Store<AppState>, private cardListService: CardListService) {
    this.cards$ = store.pipe(select(selectVideosState));
  }

  ngOnInit(): void {
    this.cardListService.sort$.subscribe((sort: ISort) => {
      this.sort = sort;
    });
  }
}
