import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';

import { AuthRoutingModule }        from './auth-routing.module';

import { ChangePasswordComponent }  from './pages/change-password/change-password.component';
import { ForgotPasswordComponent }  from './pages/forgot-password/forgot-password.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { LoginComponent }           from './pages/login/login.component';
import { ProfileComponent }         from './pages/profile/profile.component';

import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChangePasswordComponent,
    ForgotPasswordComponent,
    LoginComponent,
    ProfileComponent,
    RecoverPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
