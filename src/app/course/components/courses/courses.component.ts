import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  categories = [];
  utype: string[] = [];
  constructor(
    private courseService: CourseService,
    private store: Store<{context}>
  ) { 
    // this.store.subscribe(
    //   (response: any)=> this.utype = response.app.utype
    // )
  }

  ngOnInit() {
    this.courseService.getAllPublicCourse().subscribe(
      (response: any) => {
        this.categories = response;
      },
      error=>{
        console.log(error);
      }
    );       
  }

}
