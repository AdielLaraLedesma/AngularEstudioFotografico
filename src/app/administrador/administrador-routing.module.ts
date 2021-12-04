import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'empleados', loadChildren: () => import('./empleados/empleados.module').then( m => m.EmpleadosModule ) },
      { path: 'marcos',   loadChildren: () => import('./marcos/marcos.module').then( m => m.MarcosModule ) },
      { path: 'paquetes', loadChildren: () => import('./paquetes/paquetes.module').then( m => m.PaquetesModule ) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
