import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';



@NgModule({
  declarations: [
    UserDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserDashboardComponent
  ]
})
export class UserDashboardModule { }
