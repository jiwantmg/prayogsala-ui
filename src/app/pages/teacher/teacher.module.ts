import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { NewTeacherComponent } from './components/new-teacher/new-teacher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as teacherStore from './store/teacher.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TeacherEffects } from './store/teacher.effects';

@NgModule({
  declarations: [
    TeacherComponent,
    TeachersComponent,
    NewTeacherComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(teacherStore.teacherFeatureKey, teacherStore.reducer),
    EffectsModule.forFeature([TeacherEffects])
  ],
  entryComponents: [
    NewTeacherComponent
  ]
})
export class TeacherModule { }
