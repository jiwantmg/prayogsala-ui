import * as fromTeacher from './teacher.reducer';
import { selectTeacherState } from './teacher.selectors';

describe('Teacher Selectors', () => {
  it('should select the feature state', () => {
    const result = selectTeacherState({
      [fromTeacher.teacherFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
