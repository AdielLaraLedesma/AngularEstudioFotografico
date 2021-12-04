import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarRoutingModule } from './editar-routing.module';
import { EditarImpresionesComponent } from './impresiones/impresiones.component';
import { EditarSesionesComponent } from './sesiones/sesiones.component';

import { MaterialModule } from '../../../material.module';
import { EditarEventosComponent } from './eventos/eventos.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    EditarRoutingModule,
    MaterialModule
  ]
})
export class EditarModule { }
