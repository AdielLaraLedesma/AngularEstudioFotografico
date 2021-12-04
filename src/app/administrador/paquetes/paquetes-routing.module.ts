import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckNotAdminGuard } from 'src/app/shared/guards/check-not-admin.guard';
import { CheckNotLoginGuard } from 'src/app/shared/guards/check-not-login.guard';
import { AgregarPaqueteComponent } from './agregar/agregar.component';
import { EditarPaquetesComponent } from './editar/editar.component';
import { ListadoPaquetesComponent } from './listado/listado.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'agregar',  component: AgregarPaqueteComponent,   canActivate: [CheckNotLoginGuard, CheckNotAdminGuard] },
      { path: ':id',      component: EditarPaquetesComponent,   canActivate: [CheckNotLoginGuard, CheckNotAdminGuard] },
      { path: '',         component: ListadoPaquetesComponent,  canActivate: [CheckNotLoginGuard, CheckNotAdminGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaquetesRoutingModule { }
