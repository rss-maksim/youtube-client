import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

export const AUTH_KEY = 'AUTH';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authorized$ = new BehaviorSubject<boolean>(this.isAuthorized());

  constructor(private router: Router) { }

  authorize(username: string, password: string): boolean {
    if (username && password) {
      localStorage.setItem(AUTH_KEY, JSON.stringify(true));
      this.authorized$.next(true);
      return true;
    }
    localStorage.removeItem(AUTH_KEY);
    this.authorized$.next(false);
    return false;
  }

  isAuthorized(): boolean {
    const token = localStorage.getItem(AUTH_KEY);

    return Boolean(token);
  }

  logout(): void {
    localStorage.removeItem(AUTH_KEY);
    this.authorized$.next(false);
    this.router.navigateByUrl('login');
  }
}
