import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseByTeachersComponent } from './course-by-teachers.component';

describe('CourseByTeachersComponent', () => {
  let component: CourseByTeachersComponent;
  let fixture: ComponentFixture<CourseByTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseByTeachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseByTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
