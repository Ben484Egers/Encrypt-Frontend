import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptPageComponent } from './encrypt-page.component';

describe('EncryptPageComponent', () => {
  let component: EncryptPageComponent;
  let fixture: ComponentFixture<EncryptPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncryptPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncryptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
