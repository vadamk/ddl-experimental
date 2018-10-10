import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UtilService } from '@core/services/util/util.service';
import { LoginService } from '@core/services/auth/login.service';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  returnUrl: string;

  loginForm: FormGroup;
  submited = false;

  // convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  constructor(
    public util: UtilService,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  onSubmit() {

    this.submited = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return false;
    }

    this.loginService.login(this.loginForm.value)
      .subscribe(() => {

        // Store user info to localStorage
        this.loginService.storeUserInfo().subscribe();

        // Redirect to saved or to home page
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigate([this.returnUrl]);
      });
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.maxLength(256)
        ])
      ],
      password: [
        '',
        Validators.minLength(6)
      ],
      rememberMeChecked: [false],
    });
  }
}
