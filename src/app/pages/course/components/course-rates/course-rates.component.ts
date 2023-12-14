import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-course-rates',
  templateUrl: './course-rates.component.html',
  styleUrls: ['./course-rates.component.css']
})
export class CourseRatesComponent implements OnInit {
  rates: any[] = [];
  courseId: number;
  form: UntypedFormGroup = new UntypedFormGroup({
    rate: new UntypedFormControl(0, Validators.required)
  });
  submited = false;
  constructor(
    private courseService: CourseService,
    private dialogRef: MatDialogRef<CourseRatesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.courseId = this.data.courseId;
    this.getCourseRates();
  }

  getCourseRates()
  {
    this.courseService.getCourseRates(this.courseId).subscribe(
      (res: any[]) => {
        this.rates = res;
      },
      err => {
        console.error(err);
      }
    )
  }

  get formControl()
  {
    return this.form.controls;
  }

  save()
  {
    this.submited = true;
    if(this.form.invalid) return;
    
    this.courseService.addNewRateForCourse({
      courseId: this.courseId,
      rate: this.form.get('rate').value
    }).subscribe(
      res => {
        this.getCourseRates();
        this.form.reset();
      },
      err => {
        console.error(err);
      }
    )
  }
}
