import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleservicioComponent } from './detalleservicio.component';

const routes: Routes = [{ path: '', component: DetalleservicioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleservicioRoutingModule { }
