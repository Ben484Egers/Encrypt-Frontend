import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeKeyFormComponent } from './three-key-form.component';

describe('ThreeKeyFormComponent', () => {
  let component: ThreeKeyFormComponent;
  let fixture: ComponentFixture<ThreeKeyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeKeyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeKeyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
