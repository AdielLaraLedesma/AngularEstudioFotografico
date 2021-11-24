import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisserviciosComponent } from './misservicios.component';

const routes: Routes = [{ path: '', component: MisserviciosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisserviciosRoutingModule { }
