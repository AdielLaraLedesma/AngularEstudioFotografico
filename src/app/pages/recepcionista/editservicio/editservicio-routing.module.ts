import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditservicioComponent } from './editservicio.component';

const routes: Routes = [{ path: '', component: EditservicioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditservicioRoutingModule { }
