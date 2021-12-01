import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosimpresionesRoutingModule } from './serviciosimpresiones-routing.module';
import { ServiciosimpresionesComponent } from './serviciosimpresiones.component';

import { MaterialModule } from '../../../../material.module';


@NgModule({
  declarations: [
    ServiciosimpresionesComponent
  ],
  imports: [
    CommonModule,
    ServiciosimpresionesRoutingModule,
    MaterialModule
  ]
})
export class ServiciosimpresionesModule { }
