import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditpaqueteComponent } from './editpaquete.component';

const routes: Routes = [{ path: '', component: EditpaqueteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditpaqueteRoutingModule { }
