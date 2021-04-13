import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseByTeachersComponent } from './components/course-by-teachers/course-by-teachers.component';
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


@NgModule({
  declarations: [
    CourseByTeachersComponent,
    NewCourseComponent,
    CourseDetailComponent,
    NewChapterComponent,
    CourseSyllabusComponent,
    NewTopicComponent,
    TopicListComponent,
    CourseVideoComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    PmaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromCourse.courseFeatureKey, fromCourse.reducer),
    EffectsModule.forFeature([CourseEffects])
  ],
  exports: [CourseByTeachersComponent]
})
export class CourseModule { }
