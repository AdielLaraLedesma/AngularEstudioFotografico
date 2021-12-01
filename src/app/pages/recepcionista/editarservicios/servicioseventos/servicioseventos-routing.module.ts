import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicioseventosComponent } from './servicioseventos.component';

const routes: Routes = [{ path: '', component: ServicioseventosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioseventosRoutingModule { }
