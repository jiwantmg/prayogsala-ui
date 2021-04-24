import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { CategoryService } from 'src/app/core/services/category.service';
import * as fromCatStore from 'src/app/pages/categories/store/category.actions';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  form: FormGroup;
  submited = false;
  constructor(
    public matDialogRef: MatDialogRef<CategoryFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private categoryService: CategoryService,
    private store: Store<{categories}>  
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      category: new FormControl('', Validators.required),
      link: new FormControl('', Validators.required),
      displayHome: new FormControl(false)
    });
    // check if this is update form
    if(this.data.category)
    {
      this.form.get('category').setValue(this.data.category.name);
      this.form.get('link').setValue(this.data.category.link);
      this.form.get('displayHome').setValue(this.data.category.displayHome);
    }
  }

  get formControls()
  {
    return this.form.controls;
  }

  save()
  {         
    this.submited = true;
    if(this.form.invalid) return;
    let { category, link, displayHome } = this.form.value;
    let id = this.data.category ? this.data.category.categoryId : null;
    this.categoryService.addOrUpdateCategory(
      {
        id: id, 
        name: category, 
        link: link,
        displayHome: displayHome
      }).subscribe(
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
