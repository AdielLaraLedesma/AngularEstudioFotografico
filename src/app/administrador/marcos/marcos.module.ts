import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcosRoutingModule } from './marcos-routing.module';


import { MaterialModule } from '../../material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MarcosRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MarcosModule { }
