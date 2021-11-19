import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaquetesComponent } from './pages/paquete/paquetes/paquetes.component';
import { PaqueteFormComponent } from './pages/paquete/paquete-form/paquete-form.component';
import { CheckLoginGuard } from './shared/guards/check-login.guard';
import { EmpleadosComponent } from './pages/empleado/empleados/empleados.component';
import { EmpleadosFormComponent } from './pages/empleado/empleados-form/empleados-form.component';
//import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { PerfilComponent } from './pages/empleado/perfil/perfil.component';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'paquetes', 
    component: PaquetesComponent
  },
  {
    path: 'paquetes/agregar', 
    component: PaqueteFormComponent
  },
  {
    path: 'empleados',
    component: EmpleadosComponent
  },
  {
    path: 'empleados/agregar',
    component: EmpleadosFormComponent
  },
  {
    path: 'miPerfil',
    component: PerfilComponent
  },
  //{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { 
    path: 'notFound', 
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) 
  },
  { 
    path: 'login', 
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule), 
    canActivate:[CheckLoginGuard] },
  { path: 'forgotpassword', loadChildren: () => import('./pages/auth/forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordModule) },
  { path: 'recoverpassword', loadChildren: () => import('./pages/auth/recoverpassword/recoverpassword.module').then(m => m.RecoverpasswordModule) },
  { path: 'changepassword', loadChildren: () => import('./pages/auth/changepassword/changepassword.module').then(m => m.ChangepasswordModule) },
  { path: 'editpaquete/:id', loadChildren: () => import('./pages/paquete/editpaquete/editpaquete.module').then(m => m.EditpaqueteModule) },
  { path: 'editempleado/:id', loadChildren: () => import('./pages/empleado/editempleado/editempleado.module').then(m => m.EditempleadoModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
