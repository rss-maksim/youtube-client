import { Component } from '@angular/core';

import { CardListService } from '../../../youtube/services/card-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isSortingPanelVisible = false;

  constructor(private cardListService: CardListService) { }

  onToggleFilterButton() {
    this.isSortingPanelVisible = !this.isSortingPanelVisible;
  }

  onSearch(event) {
    this.cardListService.search$.next(event);
  }
}
