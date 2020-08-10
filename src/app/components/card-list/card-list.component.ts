import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CardListService } from './card-list.service';
import { ICard } from '../../models/card';
import { ISort } from '../sorting-panel/sorting-panel.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  cards$: Observable<ICard[]>;
  sort: ISort;

  constructor(private cardListService: CardListService) { }

  ngOnInit(): void {
    this.cards$ = this.cardListService.items$;
    this.cardListService.sort$.subscribe((sort: ISort) => {
      this.sort = sort;
    });
  }
}
