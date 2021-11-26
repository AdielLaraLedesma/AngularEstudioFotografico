import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarserviciosRoutingModule } from './agregarservicios-routing.module';
import { AgregarserviciosComponent } from './agregarservicios.component';

import { MaterialModule } from '../../../material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgregarserviciosComponent
  ],
  imports: [
    CommonModule,
    AgregarserviciosRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AgregarserviciosModule { }
