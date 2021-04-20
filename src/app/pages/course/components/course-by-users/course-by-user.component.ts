import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { NewCourseComponent } from '../new-course/new-course.component';
import * as courseAction from '../../store/course.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-by-user',
  templateUrl: './course-by-user.component.html',
  styleUrls: ['./course-by-user.component.css']
})
export class CourseByUserComponent implements OnInit {
  courses: any[] = [];
  user: any;
  constructor(
    private dialog: MatDialog,
    private store: Store<{course, context}>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.select(state => state).subscribe(
      (res: any) => {
        this.courses = res.course.list
        this.user = res.context.auth.user;
      }
    );

    this.loadCourses();
    
  }

  loadCourses()
  {
    if(this.user.role == "admin")
    {
      this.store.dispatch(courseAction.loadCourses({data: {type: 'all'}}));
    }else if(this.user.role == "teacher")
    {
      this.store.dispatch(courseAction.loadCourses({data: {type: 'teacher'}}));
    }else {
      this.store.dispatch(courseAction.loadCourses({data: {type: 'enrolled'}}));
    }
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
          this.loadCourses();
        }
      }
    )
  }

  gotoCourse(courseId)
  {
    this.router.navigate([`/pages/courses/${courseId}`]);
  }

}
