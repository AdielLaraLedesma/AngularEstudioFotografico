import { NgModule } from '@angular/core';
//import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

import { MatSelectModule } from '@angular/material/select';

import { MatButton } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';


const myModules = [
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatSelectModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule
  //MatButton,
  //MatListModule
]

@NgModule ({
  imports: [ ...myModules ],
  exports: [ ...myModules ]
})
export class MaterialModule {}