import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherDashboardModule } from './teacher-dashboard/teacher-dashboard.module';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



@NgModule({
  declarations: [DashboardComponent, AdminDashboardComponent],
  imports: [
    CommonModule,
    TeacherDashboardModule,
    UserDashboardModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent
      }
    ])
  ]
})
export class DashboardModule { }
