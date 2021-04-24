import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CoursesComponent } from './components/courses/courses.component';
import { CategoryCoursesComponent } from './components/category-courses/category-courses.component';
import { CourseCardModule } from '../lib/course-card/course-card.module';

@NgModule({
  declarations: [
    CoursesComponent,     
    CategoryCoursesComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    CourseCardModule
  ],
  exports: [    
  ]
})
export class CourseModule { }
