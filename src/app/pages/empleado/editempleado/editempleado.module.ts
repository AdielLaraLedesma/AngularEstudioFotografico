import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditempleadoRoutingModule } from './editempleado-routing.module';
import { EditempleadoComponent } from './editempleado.component';


@NgModule({
  declarations: [
    EditempleadoComponent
  ],
  imports: [
    CommonModule,
    EditempleadoRoutingModule
  ]
})
export class EditempleadoModule { }
