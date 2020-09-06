import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_KEY } from '../constants';

@Injectable()
export class InjectApiKeyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('InjectApiKeyInterceptor', request);
    const authReq = request.clone({
      setParams: {
        key: API_KEY
      }
    });
    return next.handle(authReq);
  }
}
