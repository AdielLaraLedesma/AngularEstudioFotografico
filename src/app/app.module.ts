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
import { BodyComponent } from './components/body/body.component';
/*import { MatSliderModule } from '@angular/material/slider';*/
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaquetesComponent } from './components/paquetes/paquetes.component';


import { PaquetesService } from './services/paquetes.service';
import { PaqueteFormComponent } from './components/paquete-form/paquete-form.component'

import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarModule } from './shared/components/sidebar/sidebar.module';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpleadosFormComponent } from './components/empleados-form/empleados-form.component';





@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    PaquetesComponent,
    PaqueteFormComponent,
    HeaderComponent,
    FooterComponent,
    EmpleadosComponent,
    EmpleadosFormComponent
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
