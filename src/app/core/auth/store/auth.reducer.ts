import { state } from "@angular/animations";
import { ActionReducer, createReducer, on } from "@ngrx/store";
import * as authActions from '../store/auth.action';

const isUserLoggedIn = () => {
    let token = localStorage.getItem('auth_token');
    return token ? true : false;
}

const userDetail = () => {
    let firstName = localStorage.getItem('firstName');
    let lastName = localStorage.getItem('lastName');
    let email = localStorage.getItem('email');
    return {
        firstName, lastName, email
    }
}

export interface AuthState {
    isLogggedIn: boolean;
    user: any;
}

export interface State {
    auth: AuthState;    
}

const initialState: State = {
    auth: {
        isLogggedIn: isUserLoggedIn(),
        user: isUserLoggedIn ? userDetail() : undefined
    }
}

export const authReducer = createReducer(
    initialState,
    on(authActions.loginSuccessful, (state, action) => ({...state, auth : { isLogggedIn: true, user: action }})),
    on(authActions.updateUserRole, (state, action) => ({...state, auth : { isLogggedIn: true, user: { ...state.auth.user, role: action.role}}})),
);