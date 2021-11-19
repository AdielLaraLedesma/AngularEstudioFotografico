import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotpasswordRoutingModule } from './forgotpassword-routing.module';
import { ForgotpasswordComponent } from './forgotpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MaterialModule } from '../../../material.module';

@NgModule({
  declarations: [
    ForgotpasswordComponent
  ],
  imports: [
    CommonModule,
    ForgotpasswordRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ForgotpasswordModule { }
