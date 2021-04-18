import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-top-courses',
  templateUrl: './top-courses.component.html',
  styleUrls: ['./top-courses.component.css']
})
export class TopCoursesComponent implements OnInit {
  courses: any[] = [];
  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.courseService.getTopCourses().subscribe(
      (res: any[]) => {
        this.courses = res;
      },
      err => {}
    )
  }


}
