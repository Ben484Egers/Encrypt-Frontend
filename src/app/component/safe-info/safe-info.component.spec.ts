import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeInfoComponent } from './safe-info.component';

describe('SafeInfoComponent', () => {
  let component: SafeInfoComponent;
  let fixture: ComponentFixture<SafeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
