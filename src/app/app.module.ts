import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** app-routing.module **/
import { AppRoutingModule } from './app-routing.module';

//Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PaquetesService } from './services/paquetes.service';
import { AuthService } from './services/auth.service';

import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SafePipePipe } from './shared/pipes/safe-pipe.pipe';
import { PaquetesFilterPipe } from './shared/pipes/paquetes-filter.pipe';
import { InterceptorService } from './services/interceptor.service';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SafePipePipe,
    PaquetesFilterPipe,
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
    MaterialModule
  ],
  providers: [
    AuthService,
    PaquetesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
    //{provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
