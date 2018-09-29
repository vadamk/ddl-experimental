import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { AuthLayoutModule } from '@shared/layouts/auth-layout/auth-layout.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,
    AuthLayoutModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
