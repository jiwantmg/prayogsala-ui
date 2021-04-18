import { Action, createReducer, on } from '@ngrx/store';
import * as CategoryActions from './category.actions';

export const categoryFeatureKey = 'category';

export interface State {
  list: any[]
}

export const initialState: State = {
  list: []
};


export const reducer = createReducer(
  initialState,  
  on(CategoryActions.loadCategorysSuccess, (state, action) => ({...state, list: action.data})),
  on(CategoryActions.loadCategorysFailure, (state, action) => state),

);

