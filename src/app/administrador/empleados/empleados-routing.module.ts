import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckNotAdminGuard } from 'src/app/shared/guards/check-not-admin.guard';
import { CheckNotLoginGuard } from 'src/app/shared/guards/check-not-login.guard';
import { AgregarEmpleadoComponent } from './agregar/agregar.component';
import { EditarEmpleadoComponent } from './editar/editar.component';
import { ListadoEmpleadosComponent } from './listado/listado.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'agregar',  component: AgregarEmpleadoComponent,  canActivate: [CheckNotLoginGuard, CheckNotAdminGuard] },
      { path: ':id',      component: EditarEmpleadoComponent,   canActivate: [CheckNotLoginGuard, CheckNotAdminGuard] },
      { path: '',         component: ListadoEmpleadosComponent, canActivate: [CheckNotLoginGuard, CheckNotAdminGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
