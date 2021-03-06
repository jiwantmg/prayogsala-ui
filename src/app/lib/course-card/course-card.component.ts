import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CourseService } from 'src/app/core/services/course.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CourseCardComponent implements OnInit {
  @Input('course') course: any = {
    courseId: '',
    title: '',
    price: 0,
    thumbnail: '',
    description: '',
    requirement: '',
    rates: []
  };

  @Input("is_enrolled") is_enrolled;
  
  utype: string = undefined;
  constructor(
    private router: Router,
    private store: Store<{context}>,
    private courserService: CourseService
  ) {    
   }

  ngOnInit() {
    this.store.select(state => state.context).subscribe(
      res => {
        this.utype = res.auth.user.role;
      }
    );

    console.log(this.course);
  }

  getImageName(name){
    return environment.server_url+'Uploads/'+name;
  }

  viewCourse() {
    this.router.navigate([`pages/courses/${this.course.courseId}`]);
  }

  enrollStudent() {
    this.courserService.enrollStudent(this.course.courseId).subscribe(
      response=>{
        this.viewCourse();
      },
      error=>{
        if(error.error) {
          alert(error.error.message);
        }
      }
    )    
  }
}