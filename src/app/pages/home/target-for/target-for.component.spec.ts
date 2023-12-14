import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetForComponent } from './target-for.component';

describe('TargetForComponent', () => {
  let component: TargetForComponent;
  let fixture: ComponentFixture<TargetForComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TargetForComponent]
    });
    fixture = TestBed.createComponent(TargetForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
