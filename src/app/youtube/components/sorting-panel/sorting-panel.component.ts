import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CardListService } from '../../services/card-list.service';
import { Direction, defaultSort } from './constants';

export interface ISort {
  sortBy: string;
  orderBy: string;
  search: string;
}

@Component({
  selector: 'app-sorting-panel',
  templateUrl: './sorting-panel.component.html',
  styleUrls: ['./sorting-panel.component.scss']
})
export class SortingPanelComponent {
  @Input() isVisible: boolean;
  @Output() handleSortingChange = new EventEmitter<ISort>();

  sortBy: string;
  orderBy: Direction;
  search: string;

  labels = [
    {
      name: 'date',
      label: 'Date'
    },
    {
      name: 'countOfViews',
      label: 'Count Of Views'
    }
  ];

  constructor(private cardListService: CardListService) {
    const { sortBy, orderBy } = defaultSort;
    this.sortBy = sortBy;
    this.orderBy = orderBy;
    this.search = '';
  }

  onSort(name: string): void {
    if (name === this.sortBy) {
      this.orderBy = this.orderBy === Direction.DESC ? Direction.ASC : Direction.DESC;
    } else {
      this.sortBy = name;
      this.orderBy = Direction.DESC;
    }
    this.cardListService.sort$.next({ sortBy: this.sortBy, orderBy: this.orderBy, search: this.search });
  }

  onChange(event) {
    this.search = event.target.value;
    this.cardListService.sort$.next({ sortBy: this.sortBy, orderBy: this.orderBy, search: this.search });
  }
}
