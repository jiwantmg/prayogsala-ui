import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from '../core/auth/store/auth.reducer';
import * as fromCategory from 'src/app/pages/categories/store/category.reducer';

export interface State {
    context: fromAuth.State,
    categories: fromCategory.State
}

export const reducers: ActionReducerMap<State> = {
    context: fromAuth.authReducer,
    categories: fromCategory.reducer
};