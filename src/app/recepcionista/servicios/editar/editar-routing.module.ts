import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckNotLoginGuard } from 'src/app/shared/guards/check-not-login.guard';
import { CheckNotRecepcionistaGuard } from 'src/app/shared/guards/check-not-recepcionista.guard';
import { EditarEventosComponent } from './eventos/eventos.component';
import { EditarImpresionesComponent } from './impresiones/impresiones.component';
import { EditarSesionesComponent } from './sesiones/sesiones.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'evento/:id',    component: EditarEventosComponent,      canActivate: [CheckNotLoginGuard, CheckNotRecepcionistaGuard]},
      {path: 'impresion/:id', component: EditarImpresionesComponent,  canActivate: [CheckNotLoginGuard, CheckNotRecepcionistaGuard]},
      {path: 'sesion/:id',    component: EditarSesionesComponent,     canActivate: [CheckNotLoginGuard, CheckNotRecepcionistaGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarRoutingModule { }
