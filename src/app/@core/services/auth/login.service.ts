import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  login(model: LoginRequest) {

    return this._http.post<any>(`${environment.apiUrl}/api/auth/login`, model)
      .pipe(map(user => {

        // login successful if there's a jwt token in the response
        if (user && user.auth_token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        this._http.get<any>(`${environment.apiUrl}/api/auth/userInfo`)
          .subscribe(userinfo => localStorage.setItem('userInfo', JSON.stringify(userinfo.data)));

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');

    return this._http.post<any>(`${environment.apiUrl}/api/auth/logout`, null);
  }
}
