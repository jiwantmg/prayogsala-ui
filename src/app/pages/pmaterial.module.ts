import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule } from '@angular/material/expansion';
const modules = [
  MatDialogModule,
  MatExpansionModule
]

@NgModule({  
  imports: modules,
  exports: modules
})
export class PmaterialModule { }
