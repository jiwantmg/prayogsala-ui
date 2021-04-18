import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryFormComponent } from '../category-form/category-form.component';
import * as fromAction from '../../store/category.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];
  constructor(
    private dialog: MatDialog,
    private store: Store<{categories}>
  ) { }

  ngOnInit(): void {    
    this.store.select(state => state.categories).subscribe(
      res => {
        this.categories = res.list;
      }
    );    
  }

  addNew()
  {
    this.dialog.open(CategoryFormComponent, {
      panelClass: 'bg-dark'
    });
  }

}
