import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciossesionesRoutingModule } from './serviciossesiones-routing.module';
import { ServiciossesionesComponent } from './serviciossesiones.component';

import { MaterialModule } from '../../../../material.module';


@NgModule({
  declarations: [
    ServiciossesionesComponent
  ],
  imports: [
    CommonModule,
    ServiciossesionesRoutingModule,
    MaterialModule
  ]
})
export class ServiciossesionesModule { }
