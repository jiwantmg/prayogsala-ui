import * as fromTeacher from './teacher.actions';

describe('loadTeachers', () => {
  it('should return an action', () => {
    expect(fromTeacher.loadTeachers().type).toBe('[Teacher] Load Teachers');
  });
});
