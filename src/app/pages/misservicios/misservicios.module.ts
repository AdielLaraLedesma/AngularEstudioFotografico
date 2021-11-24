import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisserviciosRoutingModule } from './misservicios-routing.module';
import { MisserviciosComponent } from './misservicios.component';


@NgModule({
  declarations: [
    MisserviciosComponent
  ],
  imports: [
    CommonModule,
    MisserviciosRoutingModule
  ]
})
export class MisserviciosModule { }
