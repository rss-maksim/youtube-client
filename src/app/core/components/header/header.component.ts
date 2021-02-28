import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSortingPanelVisible = false;
  isAuthorized = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.authorized$.subscribe((isAuthorized: boolean) => {
      this.isAuthorized = isAuthorized;
    });
  }

  onToggleFilterButton() {
    this.isSortingPanelVisible = !this.isSortingPanelVisible;
  }
}
