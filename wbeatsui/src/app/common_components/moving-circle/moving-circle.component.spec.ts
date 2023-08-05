import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingCircleComponent } from './moving-circle.component';

describe('MovingCircleComponent', () => {
  let component: MovingCircleComponent;
  let fixture: ComponentFixture<MovingCircleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovingCircleComponent]
    });
    fixture = TestBed.createComponent(MovingCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
