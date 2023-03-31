import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoKeyFormComponent } from './two-key-form.component';

describe('TwoKeyFormComponent', () => {
  let component: TwoKeyFormComponent;
  let fixture: ComponentFixture<TwoKeyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoKeyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoKeyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
