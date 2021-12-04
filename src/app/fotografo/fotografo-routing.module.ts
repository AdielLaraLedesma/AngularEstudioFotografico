import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckNotFotografoGuard } from '../shared/guards/check-not-fotografo.guard';
import { CheckNotLoginGuard } from '../shared/guards/check-not-login.guard';
import { DetalleComponent } from './servicios/detalle/detalle.component';
import { ListadoComponent } from './servicios/listado/listado.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'detalle/:id',  component: DetalleComponent, canActivate: [CheckNotLoginGuard, CheckNotFotografoGuard] },
      { path: ':id',          component: ListadoComponent, canActivate: [CheckNotLoginGuard, CheckNotFotografoGuard] },
      //{ path: '**',           component: ListadoComponent, canActivate: [CheckNotLoginGuard, CheckNotFotografoGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FotografoRoutingModule { }
