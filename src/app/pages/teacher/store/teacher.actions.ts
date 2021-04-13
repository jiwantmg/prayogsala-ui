import { createAction, props } from '@ngrx/store';

export const loadTeachers = createAction(
  '[Teacher] Load Teachers'
);

export const loadTeachersSuccess = createAction(
  '[Teacher] Load Teachers Success',
  props<{ data: any[] }>()
);

export const loadTeachersFailure = createAction(
  '[Teacher] Load Teachers Failure',
  props<{ error: any }>()
);
