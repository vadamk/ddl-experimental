import { Injectable } from '@angular/core';
import { UserInfo } from '@core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userInfo: UserInfo = JSON.parse(localStorage.getItem('userInfo'));
  userSesion: UserInfo = JSON.parse(localStorage.getItem('userSesion'));

}
