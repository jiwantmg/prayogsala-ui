import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseByUserComponent } from './course-by-user.component';

describe('CourseByUserComponent', () => {
  let component: CourseByUserComponent;
  let fixture: ComponentFixture<CourseByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseByUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
