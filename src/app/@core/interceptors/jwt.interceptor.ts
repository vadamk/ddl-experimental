import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // add authorization header with jwt token if available
    const userSession = JSON.parse(localStorage.getItem('userSession'));
    if (userSession && userSession.auth_token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${userSession.auth_token}`
        }
      });
    }

    return next.handle(request);
  }
}
