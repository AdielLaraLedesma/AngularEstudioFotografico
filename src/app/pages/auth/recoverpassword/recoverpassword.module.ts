import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoverpasswordRoutingModule } from './recoverpassword-routing.module';
import { RecoverpasswordComponent } from './recoverpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MaterialModule } from '../../../material.module';


@NgModule({
  declarations: [
    RecoverpasswordComponent
  ],
  imports: [
    CommonModule,
    RecoverpasswordRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RecoverpasswordModule { }
