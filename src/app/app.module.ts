import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BodyComponent } from './components/body/body.component';
/*import { MatSliderModule } from '@angular/material/slider';*/
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaquetesComponent } from '../app/pages/administrador/paquete/paquetes/paquetes.component';


import { PaquetesService } from './services/paquetes.service';
import { PaqueteFormComponent } from '../app/pages/administrador/paquete/paquete-form/paquete-form.component'

import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarModule } from './shared/components/sidebar/sidebar.module';
import { EmpleadosComponent } from '../app/pages/administrador/empleado/empleados/empleados.component';
import { EmpleadosFormComponent } from '../app/pages/administrador/empleado/empleados-form/empleados-form.component';
import { PerfilComponent } from './pages/auth/perfil/perfil.component';
import { MarcosComponent } from './pages/administrador/marco/marcos/marcos.component';
import { MarcosFormComponent } from './pages/administrador/marco/marcos-form/marcos-form.component';





@NgModule({
  declarations: [
    AppComponent,
    PaqueteFormComponent,
    HeaderComponent,
    FooterComponent,
    PaquetesComponent,
    EmpleadosComponent,
    EmpleadosFormComponent,
    PerfilComponent,
    MarcosComponent,
    MarcosFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), // ToastrModule added
    CommonModule,
    MaterialModule,
    SidebarModule
  ],
  providers: [ 
    PaquetesService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
