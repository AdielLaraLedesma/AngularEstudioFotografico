import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditempleadoComponent } from './editempleado.component';

const routes: Routes = [{ path: '', component: EditempleadoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditempleadoRoutingModule { }
