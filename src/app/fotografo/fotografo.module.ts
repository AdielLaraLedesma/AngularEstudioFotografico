import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FotografoRoutingModule } from './fotografo-routing.module';
import { ListadoComponent } from './servicios/listado/listado.component';
import { DetalleComponent } from './servicios/detalle/detalle.component';

import { MaterialModule } from '../material.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListadoComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    FotografoRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FotografoModule { }
