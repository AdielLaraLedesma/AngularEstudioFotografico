import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaquetesComponent } from './components/paquetes/paquetes.component';
import { PaqueteFormComponent } from './components/paquete-form/paquete-form.component';
import { CheckLoginGuard } from './shared/guards/check-login.guard';

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
  //{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { 
    path: 'notFound', 
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) 
  },
  { 
    path: 'login', 
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule), 
    canActivate:[CheckLoginGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
