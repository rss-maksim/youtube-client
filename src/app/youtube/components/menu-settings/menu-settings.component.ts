import { Component, Input } from '@angular/core';

import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-settings',
  templateUrl: './menu-settings.component.html',
  styleUrls: ['./menu-settings.component.scss']
})
export class MenuSettingsComponent {
  @Input() isAuthorized: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();
  }

  navigateTo(to: string): void {
    this.router.navigateByUrl(to);
  }
}
