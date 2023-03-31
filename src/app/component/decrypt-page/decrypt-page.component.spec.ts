import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecryptPageComponent } from './decrypt-page.component';

describe('DecryptPageComponent', () => {
  let component: DecryptPageComponent;
  let fixture: ComponentFixture<DecryptPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecryptPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecryptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
