import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { NewCourseComponent } from '../new-course/new-course.component';
import * as courseAction from '../../store/course.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-by-teachers',
  templateUrl: './course-by-teachers.component.html',
  styleUrls: ['./course-by-teachers.component.css']
})
export class CourseByTeachersComponent implements OnInit {
  courses: any[] = [];
  constructor(
    private dialog: MatDialog,
    private store: Store<{course}>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.select(state => state.course).subscribe(
      (res: any) => {
        this.courses = res.list
      }
    );

    this.store.dispatch(courseAction.loadCourses());
  }

  newCourseForm()
  {
    let dialog = this.dialog.open(NewCourseComponent, {
      minWidth: '400px',
      minHeight: '300px',
      panelClass: 'bg-dark'
    });

    dialog.afterClosed().subscribe(
      res => {
        if(res)
        {
          this.store.dispatch(courseAction.loadCourses()); 
        }
      }
    )
  }

  gotoCourse(courseId)
  {
    this.router.navigate([`/pages/courses/${courseId}`]);
  }

}
