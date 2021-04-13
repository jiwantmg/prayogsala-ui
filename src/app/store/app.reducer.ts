import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from '../core/auth/store/auth.reducer';

export interface State {
    context: fromAuth.State
}

export const reducers: ActionReducerMap<State> = {
    context: fromAuth.authReducer
};