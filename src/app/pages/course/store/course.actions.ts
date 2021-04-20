import { createAction, props } from '@ngrx/store';

export const loadCourses = createAction(
  '[Course] Load Courses',
  props<{data: { type: string}}>()
);

export const loadCoursesSuccess = createAction(
  '[Course] Load Courses Success',
  props<{ data: any }>()
);

export const loadCoursesFailure = createAction(
  '[Course] Load Courses Failure',
  props<{ error: any }>()
);
