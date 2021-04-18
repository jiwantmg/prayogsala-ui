import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { CategoryService } from 'src/app/core/services/category.service';
import * as fromCatStore from 'src/app/pages/categories/store/category.actions';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  category: string = "";  
  link: string = "";  
  constructor(
    public matDialogRef: MatDialogRef<CategoryFormComponent>,
    private categoryService: CategoryService,
    private store: Store<{categories}>  
  ) { }

  ngOnInit(): void {
  }

  save()
  {      
    this.categoryService.addNewCategory({category: this.category, link: this.link}).subscribe(
      res => {
        this.matDialogRef.close(true);
        this.store.dispatch(fromCatStore.loadCategorys());
      },
      err => {
        console.error(err);
      }
    )
  }
}
