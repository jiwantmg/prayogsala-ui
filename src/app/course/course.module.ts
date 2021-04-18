import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseCardComponent } from './components/course-card/course-card.component';


@NgModule({
  declarations: [CoursesComponent, CourseCardComponent],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
