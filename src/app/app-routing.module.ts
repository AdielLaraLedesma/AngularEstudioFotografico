import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaquetesComponent } from './components/paquetes/paquetes.component';
import { LoginComponent } from './components/login/login.component'
import { PaqueteFormComponent } from './components/paquete-form/paquete-form.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'paquetes', component: PaquetesComponent},
  {path: 'paquetes/agregar', component: PaqueteFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
