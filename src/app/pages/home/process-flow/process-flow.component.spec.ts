import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessFlowComponent } from './process-flow.component';

describe('ProcessFlowComponent', () => {
  let component: ProcessFlowComponent;
  let fixture: ComponentFixture<ProcessFlowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessFlowComponent]
    });
    fixture = TestBed.createComponent(ProcessFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
