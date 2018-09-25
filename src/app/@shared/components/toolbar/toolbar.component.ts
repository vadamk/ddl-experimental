import { Component, OnInit } from '@angular/core';
import { LoginService } from '@core/services/auth/login.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private _loginService: LoginService
  ) { }

  onLogout() {
    this._loginService.logout().subscribe();
  }

  ngOnInit() {
  }

}
