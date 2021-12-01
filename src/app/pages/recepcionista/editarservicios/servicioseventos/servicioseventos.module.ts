import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicioseventosRoutingModule } from './servicioseventos-routing.module';
import { ServicioseventosComponent } from './servicioseventos.component';

import { MaterialModule } from '../../../../material.module';


@NgModule({
  declarations: [
    ServicioseventosComponent
  ],
  imports: [
    CommonModule,
    ServicioseventosRoutingModule,
    MaterialModule
  ]
})
export class ServicioseventosModule { }
