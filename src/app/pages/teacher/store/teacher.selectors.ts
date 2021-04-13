import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTeacher from './teacher.reducer';

export const selectTeacherState = createFeatureSelector<fromTeacher.State>(
  fromTeacher.teacherFeatureKey
);
