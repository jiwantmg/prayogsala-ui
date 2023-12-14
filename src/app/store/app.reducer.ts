import { ActionReducer, ActionReducerMap, INIT, MetaReducer } from '@ngrx/store';
import * as fromAuth from '../core/auth/store/auth.reducer';
import * as fromCategory from 'src/app/pages/categories/store/category.reducer';
import { isDevMode } from '@angular/core';
import { logout } from './app.actions';

export interface State {
    context: fromAuth.State,
    categories: fromCategory.State
}

export const reducers: ActionReducerMap<State> = {
    context: fromAuth.authReducer,
    categories: fromCategory.reducer
};

export function debugMeta(reducer: ActionReducer<any>): ActionReducer<any> {
    return function(state, action) {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    }
}

export function logoutMeta(reducer: ActionReducer<any>) : ActionReducer<any> {
    return function(state, action) {
        if(action?.type === logout.type) {
            return reducer(undefined, {type: INIT})
        }
        return reducer(state, action);
    }
}

export const metaReducers: MetaReducer<any>[] = !isDevMode() ? [logoutMeta] : [debugMeta, logoutMeta];