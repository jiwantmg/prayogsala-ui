import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseByUserComponent } from './components/course-by-users/course-by-user.component';
import { CourseRoutingModule } from './course-routing.module';
import { NewCourseComponent } from './components/new-course/new-course.component';
import { PmaterialModule } from '../pmaterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import * as fromCourse from './store/course.reducer';
import { CourseEffects } from './store/course.effects';
import { StoreModule } from '@ngrx/store';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { NewChapterComponent } from './components/new-chapter/new-chapter.component';
import { CourseSyllabusComponent } from './components/course-syllabus/course-syllabus.component';
import { NewTopicComponent } from './components/new-topic/new-topic.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { CourseVideoComponent } from './components/course-video/course-video.component';
import { PreviewVideoComponent } from './components/preview-video/preview-video.component';
import { VgCoreModule, } from 'ngx-videogular';
import { PurchaseCourseComponent } from './components/purchase-course/purchase-course.component';
import { ChatModule } from '../chat/chat.module';
import { CourseRatesComponent } from './components/course-rates/course-rates.component';

@NgModule({
  declarations: [
    CourseByUserComponent,
    NewCourseComponent,
    CourseDetailComponent,
    NewChapterComponent,
    CourseSyllabusComponent,
    NewTopicComponent,
    TopicListComponent,
    CourseVideoComponent,
    PreviewVideoComponent,
    PurchaseCourseComponent,
    CourseRatesComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    PmaterialModule,
    FormsModule,
    ReactiveFormsModule,
    VgCoreModule,
    StoreModule.forFeature(fromCourse.courseFeatureKey, fromCourse.reducer),
    EffectsModule.forFeature([CourseEffects]),
    ChatModule
  ],
  exports: [
    CourseByUserComponent, 
    PreviewVideoComponent
  ]
})
export class CourseModule { }
