import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditempleadoRoutingModule } from './editempleado-routing.module';
import { EditempleadoComponent } from './editempleado.component';

import { MaterialModule } from '../../../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditempleadoComponent
  ],
  imports: [
    CommonModule,
    EditempleadoRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditempleadoModule { }
