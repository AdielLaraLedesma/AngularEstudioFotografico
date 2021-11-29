import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleservicioRoutingModule } from './detalleservicio-routing.module';
import { DetalleservicioComponent } from './detalleservicio.component';

import { MaterialModule } from '../../../material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SafePipePipe } from '../../../shared/pipe/safe-pipe.pipe';


@NgModule({
  declarations: [
    DetalleservicioComponent
  ],
  imports: [
    CommonModule,
    DetalleservicioRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SafePipePipe
  ]
})
export class DetalleservicioModule { }
