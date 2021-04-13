import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {
  courseTitle: string = "";
  selectedFile: File;
  constructor(
    public matDialogRef: MatDialogRef<NewCourseComponent>,
    private courseService: CourseService    
  ) { }

  ngOnInit(): void {
  }

  save()
  {
    console.log(this.courseTitle, this.selectedFile);
    let form = new FormData();
    form.append("courseTitle", this.courseTitle);
    form.append("thumbnail", this.selectedFile);
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
