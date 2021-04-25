import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRatesComponent } from './course-rates.component';

describe('CourseRatesComponent', () => {
  let component: CourseRatesComponent;
  let fixture: ComponentFixture<CourseRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
