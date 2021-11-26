import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditpaqueteRoutingModule } from './editpaquete-routing.module';
import { EditpaqueteComponent } from './editpaquete.component';

import { MaterialModule } from '../../../../material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditpaqueteComponent
  ],
  imports: [
    CommonModule,
    EditpaqueteRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditpaqueteModule { }
