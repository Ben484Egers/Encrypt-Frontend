import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimerOptionsComponent } from './disclaimer-options.component';

describe('DisclaimerOptionsComponent', () => {
  let component: DisclaimerOptionsComponent;
  let fixture: ComponentFixture<DisclaimerOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisclaimerOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisclaimerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
