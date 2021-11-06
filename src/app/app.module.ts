import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material
import { MaterialModule } from './material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
/*import { MatSliderModule } from '@angular/material/slider';*/
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaquetesComponent } from './components/paquetes/paquetes.component';


import { PaquetesService } from './services/paquetes.service';
import { LoginComponent } from './components/login/login.component';
import { PaqueteFormComponent } from './components/paquete-form/paquete-form.component'





@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    PaquetesComponent,
    LoginComponent,
    PaqueteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ 
    PaquetesService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
