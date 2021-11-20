import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditmarcoRoutingModule } from './editmarco-routing.module';
import { EditmarcoComponent } from './editmarco.component';

import { MaterialModule } from '../../../material.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditmarcoComponent
  ],
  imports: [
    CommonModule,
    EditmarcoRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditmarcoModule { }
