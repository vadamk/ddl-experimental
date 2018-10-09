import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '@core/services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  submited: boolean;

  returnUrl: string;

  model: LoginRequest;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.model = {
      userName: null,
      password: null,
      rememberMeChecked: false,
    };
  }

  onSubmit(form) {

    this.submited = true;

    // stop here if form is invalid
    if (form.invalid) {
      return false;
    }

    this.loginService.login(this.model)
      .subscribe(() => {

        // Store user info to localStorage
        this.loginService.storeUserInfo().subscribe();

        // Redirect to saved or to home page
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigate([this.returnUrl]);
      });
  }
}
