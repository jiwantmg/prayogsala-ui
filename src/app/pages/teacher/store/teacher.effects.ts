import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as TeacherActions from './teacher.actions';
import { TeacherService } from 'src/app/core/services/teacher.service';



@Injectable()
export class TeacherEffects {

  loadTeachers$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(TeacherActions.loadTeachers),
      concatMap(() =>
        this.teacherService.getTeachers().pipe(
          map((data: any[]) => TeacherActions.loadTeachersSuccess({ data })),
          catchError(error => of(TeacherActions.loadTeachersFailure({ error }))))       
      )
    );
  });
  constructor(
    private actions$: Actions,
    private teacherService: TeacherService
    ) {}
}
