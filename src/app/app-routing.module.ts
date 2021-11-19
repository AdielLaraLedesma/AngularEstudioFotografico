import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaquetesComponent } from './pages/paquete/paquetes/paquetes.component';
import { PaqueteFormComponent } from './pages/paquete/paquete-form/paquete-form.component';
import { CheckLoginGuard } from './shared/guards/check-login.guard';
import { EmpleadosComponent } from './pages/empleado/empleados/empleados.component';
import { EmpleadosFormComponent } from './pages/empleado/empleados-form/empleados-form.component';
//import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { PerfilComponent } from './pages/empleado/perfil/perfil.component';
import { CheckNotLoginGuard } from './shared/guards/check-not-login.guard';
import { LoginComponent } from './pages/auth/login/login.component';
import { CheckNotAdminGuard } from './shared/guards/check-not-admin.guard';
import { MarcosComponent } from './pages/marco/marcos/marcos.component'
import { MarcosFormComponent } from './pages/marco/marcos-form/marcos-form.component';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    canActivate: [CheckNotLoginGuard]
  },
  {
    path: 'paquetes', 
    component: PaquetesComponent,
    canActivate: [CheckNotLoginGuard, CheckNotAdminGuard]
  },
  {
    path: 'paquetes/agregar', 
    component: PaqueteFormComponent,
    canActivate: [CheckNotLoginGuard, CheckNotAdminGuard]
  },
  {
    path: 'empleados',
    component: EmpleadosComponent,
    canActivate: [CheckNotLoginGuard, CheckNotAdminGuard]
  },
  {
    path: 'empleados/agregar',
    component: EmpleadosFormComponent,
    canActivate: [CheckNotLoginGuard, CheckNotAdminGuard]
  },
  {
    path: 'miPerfil',
    component: PerfilComponent,
    canActivate: [CheckNotLoginGuard, CheckNotAdminGuard]
  },
  {
    path: 'marcos', 
    component: MarcosComponent,
    canActivate: [CheckNotLoginGuard, CheckNotAdminGuard]
  },
  {
    path: 'marcos/agregar',
    component: MarcosFormComponent,
    canActivate: [CheckNotLoginGuard, CheckNotAdminGuard]
  },
  { 
    path: 'notFound', 
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) 
  },
  { 
    path: 'login', 
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule), 
    canActivate: [CheckLoginGuard] 
  },
  { 
    path: 'forgotpassword', 
    loadChildren: () => import('./pages/auth/forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordModule),
    canActivate: [CheckLoginGuard]
  },
  { 
    path: 'recoverpassword', 
    loadChildren: () => import('./pages/auth/recoverpassword/recoverpassword.module').then(m => m.RecoverpasswordModule),
    canActivate: [CheckLoginGuard] 
  },
  { 
    path: 'changepassword', 
    loadChildren: () => import('./pages/auth/changepassword/changepassword.module').then(m => m.ChangepasswordModule) ,
    canActivate: [CheckNotLoginGuard, CheckNotAdminGuard]
  },
  { 
    path: 'editpaquete/:id', 
    loadChildren: () => import('./pages/paquete/editpaquete/editpaquete.module').then(m => m.EditpaqueteModule),
    canActivate: [CheckNotLoginGuard, CheckNotAdminGuard]
  },
  { 
    path: 'editempleado/:id', 
    loadChildren: () => import('./pages/empleado/editempleado/editempleado.module').then(m => m.EditempleadoModule),
    canActivate: [CheckNotLoginGuard, CheckNotAdminGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
