import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecepcionistaRoutingModule } from './recepcionista-routing.module';
import { ListadoComponent } from './servicios/listado/listado.component';
import { AgregarComponent } from './servicios/agregar/agregar.component';

import { MaterialModule } from '../material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarEventosComponent } from './servicios/editar/eventos/eventos.component';
import { EditarSesionesComponent } from './servicios/editar/sesiones/sesiones.component';
import { EditarImpresionesComponent } from './servicios/editar/impresiones/impresiones.component';


@NgModule({
  declarations: [
    ListadoComponent,
    AgregarComponent,
    EditarEventosComponent,
    EditarSesionesComponent,
    EditarImpresionesComponent
  ],
  imports: [
    CommonModule,
    RecepcionistaRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RecepcionistaModule { }
