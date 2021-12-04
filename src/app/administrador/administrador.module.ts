import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';


import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgregarPaqueteComponent } from './paquetes/agregar/agregar.component';
import { ListadoPaquetesComponent } from './paquetes/listado/listado.component';
import { EditarPaquetesComponent } from './paquetes/editar/editar.component';

import { AgregarMarcoComponent } from './marcos/agregar/agregar.component';
import { ListadoMarcosComponent } from './marcos/listado/listado.component';
import { EditarMarcosComponent } from './marcos/editar/editar.component';

import { AgregarEmpleadoComponent } from './empleados/agregar/agregar.component';
import { ListadoEmpleadosComponent } from './empleados/listado/listado.component';
import { EditarEmpleadoComponent } from './empleados/editar/editar.component';



@NgModule({
  declarations: [
    AgregarPaqueteComponent,
    ListadoPaquetesComponent,
    EditarPaquetesComponent,
  
    AgregarMarcoComponent,
    ListadoMarcosComponent,
    EditarMarcosComponent,

    AgregarEmpleadoComponent,
    ListadoEmpleadosComponent,
    EditarEmpleadoComponent

  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministradorModule { }
