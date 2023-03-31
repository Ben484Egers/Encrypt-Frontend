import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyOptionsComponent } from './key-options.component';

describe('KeyOptionsComponent', () => {
  let component: KeyOptionsComponent;
  let fixture: ComponentFixture<KeyOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
