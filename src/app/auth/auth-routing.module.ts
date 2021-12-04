import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CheckNotLoginGuard } from '../shared/guards/check-not-login.guard';
import { CheckLoginGuard } from '../shared/guards/check-login.guard';

const routes: Routes = [

  {
    path: '',
    children: [
      { path:'login',                 component: LoginComponent,              canActivate: [CheckLoginGuard] },
      { path:'forgot-password',       component: ForgotPasswordComponent,     canActivate: [CheckLoginGuard] },
      { path:'recover-password/:id',  component: RecoverPasswordComponent,    canActivate: [CheckLoginGuard] },
      { path:'profile',               component: ProfileComponent,            canActivate: [CheckNotLoginGuard] },
      { path:'change-password',       component: ChangePasswordComponent,     canActivate: [CheckNotLoginGuard] },
      //{ path:'**', redirectTo: 'login'}
    ]
  }

]



@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class AuthRoutingModule { }
