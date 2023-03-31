import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneKeyFormComponent } from './one-key-form.component';

describe('OneKeyFormComponent', () => {
  let component: OneKeyFormComponent;
  let fixture: ComponentFixture<OneKeyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneKeyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneKeyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
