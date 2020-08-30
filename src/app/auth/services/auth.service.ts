import { Injectable } from '@angular/core';

export const AUTH_KEY = 'AUTH';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authorize(username: string, password: string): boolean {
    if (username && password) {
      localStorage.setItem(AUTH_KEY, JSON.stringify(true));
      return true;
    }
    localStorage.removeItem(AUTH_KEY);
    return false;
  }

  isAuthorized(): boolean {
    const token = localStorage.getItem(AUTH_KEY);

    return Boolean(token);
  }
}
