import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';



@NgModule({
  declarations: [
    TeacherDashboardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TeacherDashboardComponent
  ]
})
export class TeacherDashboardModule { }
