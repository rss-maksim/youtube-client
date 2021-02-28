import { Component, Input } from '@angular/core';

import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-menu-settings',
  templateUrl: './menu-settings.component.html',
  styleUrls: ['./menu-settings.component.scss']
})
export class MenuSettingsComponent {
  @Input() isAuthorized: boolean;

  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
