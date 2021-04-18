import * as fromCategory from './category.actions';

describe('loadCategorys', () => {
  it('should return an action', () => {
    expect(fromCategory.loadCategorys().type).toBe('[Category] Load Categorys');
  });
});
