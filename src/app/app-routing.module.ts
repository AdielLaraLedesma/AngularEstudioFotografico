import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckLoginGuard } from './shared/guards/check-login.guard';
import { CheckNotAdminGuard } from './shared/guards/check-not-admin.guard';
import { CheckNotFotografoGuard } from './shared/guards/check-not-fotografo.guard';
import { CheckNotLoginGuard } from './shared/guards/check-not-login.guard';
import { CheckNotRecepcionistaGuard } from './shared/guards/check-not-recepcionista.guard';

/*const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    pathMatch: 'full',
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
    canActivate: [CheckNotLoginGuard]
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
    path: 'forgotpassword',
    loadChildren: () => import('./pages/auth/forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordModule),
    canActivate: [CheckLoginGuard]
  },
  {
    path: 'recoverpassword/:id',
    loadChildren: () => import('../app/pages/auth/recoverpassword/recoverpassword.module').then(m => m.RecoverpasswordModule),
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./pages/auth/changepassword/changepassword.module').then(m => m.ChangepasswordModule) ,
    canActivate: [CheckNotLoginGuard]
  },
  {
    path: 'paquetes/:id',
    loadChildren: () => import('../app/pages/administrador/paquete/editpaquete/editpaquete.module').then(m => m.EditpaqueteModule),
    canActivate: [CheckNotLoginGuard, CheckNotAdminGuard]
  },
  {
    path: 'empleados/:id',
    loadChildren: () => import('../app/pages/administrador/empleado/editempleado/editempleado.module').then(m => m.EditempleadoModule),
    canActivate: [CheckNotLoginGuard, CheckNotAdminGuard]
  },
  {
    path: 'marcos/:id',
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
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule),
    canActivate: [CheckLoginGuard]
  },
  { path: 'servicioevento/:id', loadChildren: () => import('./pages/recepcionista/editarservicios/servicioseventos/servicioseventos.module').then(m => m.ServicioseventosModule) },
  { path: 'servicioimpresion/:id', loadChildren: () => import('./pages/recepcionista/editarservicios/serviciosimpresiones/serviciosimpresiones.module').then(m => m.ServiciosimpresionesModule) },
  { path: 'serviciosesion/:id', loadChildren: () => import('./pages/recepcionista/editarservicios/serviciossesiones/serviciossesiones.module').then(m => m.ServiciossesionesModule) },
  {
    path: '**',  loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }

];*/

const routes: Routes = [

  { path: 'auth', loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ) },
  { path: 'recepcionista/servicios', loadChildren: () => import('./recepcionista/recepcionista.module').then( m => m.RecepcionistaModule ), canActivate: [CheckNotRecepcionistaGuard, CheckNotLoginGuard] },
  { path: 'fotografo/servicios', loadChildren: () => import('./fotografo/fotografo.module').then( m => m.FotografoModule ), canActivate: [CheckNotFotografoGuard, CheckNotLoginGuard] },
  { path: 'administrador', loadChildren: () => import('./administrador/administrador.module').then( m => m.AdministradorModule ), canActivate: [CheckNotAdminGuard, CheckNotLoginGuard] },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule ) },
  { path: '**', redirectTo: 'home' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
