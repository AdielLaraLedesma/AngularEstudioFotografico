import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciossesionesComponent } from './serviciossesiones.component';

const routes: Routes = [{ path: '', component: ServiciossesionesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciossesionesRoutingModule { }
