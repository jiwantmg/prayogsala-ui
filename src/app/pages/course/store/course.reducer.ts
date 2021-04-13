import { Action, createReducer, on } from '@ngrx/store';
import * as CourseActions from './course.actions';

export const courseFeatureKey = 'course';

export interface State {
  list: any[]
}

export const initialState: State = {
  list:  [
   
  ]
};


export const reducer = createReducer(
  initialState,

  on(CourseActions.loadCourses, state => state),
  on(CourseActions.loadCoursesSuccess, (state, action) => ({...state, list: action.data})),
  on(CourseActions.loadCoursesFailure, (state, action) => state),

);

