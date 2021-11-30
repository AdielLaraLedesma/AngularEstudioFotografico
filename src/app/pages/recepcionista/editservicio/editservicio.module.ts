import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditservicioRoutingModule } from './editservicio-routing.module';
import { EditservicioComponent } from './editservicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material.module';


@NgModule({
  declarations: [
    EditservicioComponent
  ],
  imports: [
    CommonModule,
    EditservicioRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class EditservicioModule { }
