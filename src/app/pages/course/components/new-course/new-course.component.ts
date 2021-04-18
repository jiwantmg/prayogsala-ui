import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {
  courseTitle: string = "";
  selectedFile: File;
  categories: any[] = [];
  categoryId: any;
  constructor(
    public matDialogRef: MatDialogRef<NewCourseComponent>,
    private courseService: CourseService,
    private store: Store<{categories}>   
  ) { }

  ngOnInit(): void {
    this.store.select(state => state.categories).subscribe(
      (res) => {                          
       this.categories = res.list;       
      }
    );   
  }

  save()
  {
    console.log(this.courseTitle, this.selectedFile);
    let form = new FormData();
    form.append("courseTitle", this.courseTitle);
    form.append("thumbnail", this.selectedFile);
    form.append("categoryId", this.categoryId);
    this.courseService.addNewCourse(form).subscribe(
      res => {
        this.matDialogRef.close(true);
      },
      err => {
        console.error(err);
      }
    )
  }

  fileSelected(event)
  {
    this.selectedFile = event;
  }
}
