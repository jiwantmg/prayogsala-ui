import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as CategoryActions from './category.actions';
import { CategoryService } from 'src/app/core/services/category.service';



@Injectable()
export class CategoryEffects {

  loadCategorys$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(CategoryActions.loadCategorys),
      concatMap(() =>
        this.categoryService.getAllCategories().pipe(
          map(
            res => CategoryActions.loadCategorysSuccess({data: res})
          ),
          catchError(error => of(CategoryActions.loadCategorysFailure({ error }))))
        ),        
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        // EMPTY.pipe(
        //   map(data => CategoryActions.loadCategorysSuccess({ data })),
        //   catchError(error => of(CategoryActions.loadCategorysFailure({ error }))))
    );
  });



  constructor(
    private actions$: Actions,
    private categoryService: CategoryService
    ) {}

}
