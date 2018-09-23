import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { AuthLayoutModule } from '@theme/layouts/auth-layout/auth-layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    AuthLayoutModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
