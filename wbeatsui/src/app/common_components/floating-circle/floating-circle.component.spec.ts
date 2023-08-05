import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingCircleComponent } from './floating-circle.component';

describe('FloatingCircleComponent', () => {
  let component: FloatingCircleComponent;
  let fixture: ComponentFixture<FloatingCircleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloatingCircleComponent]
    });
    fixture = TestBed.createComponent(FloatingCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
