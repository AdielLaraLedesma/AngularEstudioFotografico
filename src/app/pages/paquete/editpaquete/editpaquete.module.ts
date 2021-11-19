import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditpaqueteRoutingModule } from './editpaquete-routing.module';
import { EditpaqueteComponent } from './editpaquete.component';


@NgModule({
  declarations: [
    EditpaqueteComponent
  ],
  imports: [
    CommonModule,
    EditpaqueteRoutingModule
  ]
})
export class EditpaqueteModule { }
