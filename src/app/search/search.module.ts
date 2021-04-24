import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { RouterModule } from '@angular/router';
import { CourseCardModule } from '../lib/course-card/course-card.module';



@NgModule({
  declarations: [SearchResultComponent],
  imports: [
    CommonModule,    
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: SearchResultComponent
      }
    ]),
    CourseCardModule
  ],
  exports: [RouterModule]
})
export class SearchModule { }
