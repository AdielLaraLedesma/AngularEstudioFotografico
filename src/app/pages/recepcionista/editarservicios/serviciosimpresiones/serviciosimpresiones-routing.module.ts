import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosimpresionesComponent } from './serviciosimpresiones.component';

const routes: Routes = [{ path: '', component: ServiciosimpresionesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosimpresionesRoutingModule { }
