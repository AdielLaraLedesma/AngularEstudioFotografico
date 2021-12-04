import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckNotAdminGuard } from 'src/app/shared/guards/check-not-admin.guard';
import { CheckNotLoginGuard } from 'src/app/shared/guards/check-not-login.guard';
import { AgregarMarcoComponent } from './agregar/agregar.component';
import { EditarMarcosComponent } from './editar/editar.component';
import { ListadoMarcosComponent } from './listado/listado.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'agregar',  component: AgregarMarcoComponent,   canActivate: [CheckNotLoginGuard, CheckNotAdminGuard] },
      { path: ':id',      component: EditarMarcosComponent,   canActivate: [CheckNotLoginGuard, CheckNotAdminGuard] },
      { path: '',         component: ListadoMarcosComponent,  canActivate: [CheckNotLoginGuard, CheckNotAdminGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarcosRoutingModule { }
