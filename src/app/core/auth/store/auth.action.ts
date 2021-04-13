import { createAction, props } from '@ngrx/store';

export const loginSuccessful = createAction(
    '[Auth] Login Successful',
    props<{ firstName: string; lastname: string, email: string }>()
);

export const loadUserRole = createAction(
    '[Auth] Load User Role'
);

export const updateUserRole = createAction(
    '[Auth] Update User Role',
    props<{ role: string }>()
);