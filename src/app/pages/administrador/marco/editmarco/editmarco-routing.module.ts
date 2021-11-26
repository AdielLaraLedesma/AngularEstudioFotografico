import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditmarcoComponent } from './editmarco.component';

const routes: Routes = [{ path: '', component: EditmarcoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditmarcoRoutingModule { }
