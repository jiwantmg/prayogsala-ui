import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { PmaterialModule } from '../pmaterial.module';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { ReactiveFormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [
    CategoriesComponent, 
    CategoryFormComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    PmaterialModule,
    ReactiveFormsModule
  ]
})
export class CategoriesModule { }
