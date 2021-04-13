import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';
import * as authAction from './auth.action';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';


@Injectable()
export class AuthEffects {
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(authAction.loadUserRole.type),
    mergeMap(() => this.authService.loadUserRole()
      .pipe(
        map((role: { role: string }) => authAction.updateUserRole(role)),
        catchError(() => EMPTY)
      ))
    )
  );
  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}