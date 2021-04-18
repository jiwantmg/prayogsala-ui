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
    requirement: ''
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
        console.log(res);
        this.utype = res.auth.user.role;
      }
    )
  }

  getImageName(name){
    return environment.server_url+'/uploads/'+name;
  }

  viewCourse() {
    this.router.navigate([`pages/courses/${this.course.courseId}`]);
  }

  enrollStudent() {
    this.courserService.enrollStudent(this.course.id).subscribe(
      response=>{
        this.router.navigate(['courses/classroom', this.course.id]);
      },
      error=>{
        console.log(error);
      }
    )    
  }



}
