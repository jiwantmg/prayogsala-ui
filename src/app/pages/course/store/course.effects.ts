import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as CourseActions from './course.actions';
import { CourseService } from 'src/app/core/services/course.service';



@Injectable()
export class CourseEffects {

  loadCourses$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(CourseActions.loadCourses),
      concatMap(() => this.courseService.getAllCourse().pipe(
        map(
          res => CourseActions.loadCoursesSuccess({data: res})
        ),
        catchError(err => of(CourseActions.loadCoursesFailure({error: err})))
      )
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        // EMPTY.pipe(
        //   map(data => CourseActions.loadCoursesSuccess({ data })),
        //   catchError(error => of(CourseActions.loadCoursesFailure({ error }))))
      )
    );
  });



  constructor(
    private actions$: Actions,
    private courseService: CourseService) {}

}
