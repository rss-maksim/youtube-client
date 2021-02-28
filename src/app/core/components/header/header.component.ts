import { Component, OnInit } from '@angular/core';

import { CardListService } from '../../../youtube/services/card-list.service';
import { AuthService } from '../../../auth/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSortingPanelVisible = false;
  isAuthorized = false;

  constructor(private cardListService: CardListService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.authorized$.subscribe((isAuthorized: boolean) => {
      this.isAuthorized = isAuthorized;
    });
  }

  onToggleFilterButton() {
    this.isSortingPanelVisible = !this.isSortingPanelVisible;
  }

  onSearch(event) {
    this.cardListService.search$.next(event);
  }
}
