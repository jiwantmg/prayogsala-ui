import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { TopCoursesComponent } from './components/top-courses/top-courses.component';



@NgModule({
  declarations: [
    TeacherDashboardComponent,
    TopCoursesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TeacherDashboardComponent
  ]
})
export class TeacherDashboardModule { }
