import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaquetesComponent } from '../app/pages/administrador/paquete/paquetes/paquetes.component';
import { PaqueteFormComponent } from '../app/pages/administrador/paquete/paquete-form/paquete-form.component';
import { CheckLoginGuard } from './shared/guards/check-login.guard';
import { EmpleadosComponent } from '../app/pages/administrador/empleado/empleados/empleados.component';
import { EmpleadosFormComponent } from '../app/pages/administrador/empleado/empleados-form/empleados-form.component';
//import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { PerfilComponent } from './pages/auth/perfil/perfil.component';
import { CheckNotLoginGuard } from '../app/shared/guards/check-not-login.guard';
import { LoginComponent } from './pages/auth/login/login.component';
import { CheckNotAdminGuard } from '../app/shared/guards/check-not-admin.guard';
import { MarcosComponent } from './pages/administrador/marco/marcos/marcos.component'
import { MarcosFormComponent } from './pages/administrador/marco/marcos-form/marcos-form.component';

const routes: Routes = [
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
    path: 'forgotpassword', 
    loadChildren: () => import('./pages/auth/forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordModule),
    canActivate: [CheckLoginGuard]
  },
  { 
    path: 'recoverpassword/:id', 
    loadChildren: () => import('../app/pages/auth/recoverpassword/recoverpassword.module').then(m => m.RecoverpasswordModule),
    //canActivate: [CheckLoginGuard] 
  },
  { 
    path: 'changepassword', 
    loadChildren: () => import('./pages/auth/changepassword/changepassword.module').then(m => m.ChangepasswordModule) ,
    canActivate: [CheckNotLoginGuard]
  },
  { 
    path: 'editpaquete/:id', 
    loadChildren: () => import('../app/pages/administrador/paquete/editpaquete/editpaquete.module').then(m => m.EditpaqueteModule),
    canActivate: [CheckNotLoginGuard, CheckNotAdminGuard]
  },
  { 
    path: 'editempleado/:id', 
    loadChildren: () => import('../app/pages/administrador/empleado/editempleado/editempleado.module').then(m => m.EditempleadoModule),
    canActivate: [CheckNotLoginGuard, CheckNotAdminGuard]
  },
  { 
    path: 'editmarco/:id', 
    loadChildren: () => import('../app/pages/administrador/marco/editmarco/editmarco.module').then(m => m.EditmarcoModule),
    canActivate: [CheckNotLoginGuard, CheckNotAdminGuard]
  },
  { 
    path: 'serviciosfotografo/:id', 
    loadChildren: () => import('./pages/fotografo/misservicios/misservicios.module').then(m => m.MisserviciosModule)
  },
  { 
    path: 'detalleservicio/:id', 
    loadChildren: () => import('./pages/fotografo/detalleservicio/detalleservicio.module').then(m => m.DetalleservicioModule) 
  },
  { path: 'servicios', loadChildren: () => import('./pages/recepcionista/servicios/servicios.module').then(m => m.ServiciosModule) },
  { path: 'servicios/agregar', loadChildren: () => import('./pages/recepcionista/agregarservicios/agregarservicios.module').then(m => m.AgregarserviciosModule) },
  { path: 'editservicio/:id/:tipo_paquete_id', loadChildren: () => import('./pages/recepcionista/editservicio/editservicio.module').then(m => m.EditservicioModule) },
  {
    path: '', 
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    canActivate: [CheckNotLoginGuard]
  },
  { 
    path: 'login', 
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule), 
    canActivate: [CheckLoginGuard] 
  },
  { path: 'servicioevento/:id', loadChildren: () => import('./pages/recepcionista/editarservicios/servicioseventos/servicioseventos.module').then(m => m.ServicioseventosModule) },
  { path: 'servicioimpresion/:id', loadChildren: () => import('./pages/recepcionista/editarservicios/serviciosimpresiones/serviciosimpresiones.module').then(m => m.ServiciosimpresionesModule) },
  { path: 'serviciosesion/:id', loadChildren: () => import('./pages/recepcionista/editarservicios/serviciossesiones/serviciossesiones.module').then(m => m.ServiciossesionesModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
