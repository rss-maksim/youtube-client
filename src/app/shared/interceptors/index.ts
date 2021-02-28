import { InjectApiKeyInterceptor } from './inject-api-key.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const httpInterceptorsProviders = [{
  provide: HTTP_INTERCEPTORS,
  useClass: InjectApiKeyInterceptor,
  multi: true
}];
