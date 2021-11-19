import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecoverpasswordComponent } from './recoverpassword.component';

const routes: Routes = [{ path: '', component: RecoverpasswordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecoverpasswordRoutingModule { }
