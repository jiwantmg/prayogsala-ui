import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {  
  categories: any[] = [];  
  form: UntypedFormGroup;
  submited = false;
  constructor(
    public matDialogRef: MatDialogRef<NewCourseComponent>,
    private courseService: CourseService,
    private store: Store<{categories}>   
  ) { }

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      courseTitle: new UntypedFormControl('', Validators.required),
      selectedFile: new UntypedFormControl(null, Validators.required),
      categoryId: new UntypedFormControl('', Validators.required),      
    });

    this.store.select(state => state.categories).subscribe(
      (res) => {                          
       this.categories = res.list;       
      }
    );       
  }

  save()
  {    
    this.submited = true;
    if(this.form.invalid) return;
    let form = new FormData();
    form.append("courseTitle", this.form.get('courseTitle').value);
    form.append("thumbnail", this.form.get('selectedFile').value);
    form.append("categoryId", this.form.get('categoryId').value);
    this.courseService.addNewCourse(form).subscribe(
      res => {
        this.matDialogRef.close(true);
      },
      err => {
        console.error(err);
      }
    )
  }

  get formControl() {
    return this.form.controls;
  }

  fileSelected(event)
  {
    this.form.get('selectedFile').setValue(event);
  }
}
