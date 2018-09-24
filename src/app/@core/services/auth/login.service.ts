import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { UserInfo, UserSession } from '@core/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  public storeUserInfo(): Observable<UserInfo> {
    return this._http.get<any>(`${environment.apiUrl}/api/auth/userInfo`)
      .pipe(
        map(userinfo => {
          localStorage.setItem('userInfo', JSON.stringify(userinfo.data));
          return userinfo.data;
        })
      );
  }

  public login(model: LoginRequest): Observable<UserSession> {

    return this._http.post<UserSession>(`${environment.apiUrl}/api/auth/login`, model)
      .pipe(
        map(user => {

          // login successful if there's a jwt token in the response
          if (user && user.auth_token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('userSession', JSON.stringify(user));
          }

          return user;
        })
      );
  }

  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('userSession');

    return this._http.post<any>(`${environment.apiUrl}/api/auth/logout`, null);
  }
}
