import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TeacherEffects } from './teacher.effects';

describe('TeacherEffects', () => {
  let actions$: Observable<any>;
  let effects: TeacherEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TeacherEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(TeacherEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
