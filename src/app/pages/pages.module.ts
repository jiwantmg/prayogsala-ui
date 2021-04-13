import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PmaterialModule } from './pmaterial.module';



@NgModule({
  declarations: [],
  imports: [    
    PmaterialModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'teachers',
        loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule)
      },
      {
        path: 'courses',
        loadChildren: () => import('./course/course.module').then(m => m.CourseModule)
      }
    ])
  ]
})
export class PagesModule { }
