import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckNotLoginGuard } from '../shared/guards/check-not-login.guard';
import { CheckNotRecepcionistaGuard } from '../shared/guards/check-not-recepcionista.guard';
import { AgregarComponent } from './servicios/agregar/agregar.component';
import { ListadoComponent } from './servicios/listado/listado.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'agregar',      component: AgregarComponent,  canActivate: [CheckNotLoginGuard, CheckNotRecepcionistaGuard] },
      { path: 'editar',       loadChildren: () => import('./servicios/editar/editar.module').then( m => m.EditarModule ) },
      { path: '',             component: ListadoComponent,  canActivate: [CheckNotLoginGuard, CheckNotRecepcionistaGuard] },
      { path: '**',           component: ListadoComponent,  canActivate: [CheckNotLoginGuard, CheckNotRecepcionistaGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecepcionistaRoutingModule { }
