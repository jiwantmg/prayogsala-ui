import { Action, createReducer, on } from '@ngrx/store';
import * as TeacherActions from './teacher.actions';

export const teacherFeatureKey = 'teacher';

export interface State {
  list: any[]
}

export const initialState: State = {
  list: []
};


export const reducer = createReducer(
  initialState,

  on(TeacherActions.loadTeachers, state => state),
  on(TeacherActions.loadTeachersSuccess, (state, action) => ({...state, list: action.data})),
  on(TeacherActions.loadTeachersFailure, (state, action) => state),

);

