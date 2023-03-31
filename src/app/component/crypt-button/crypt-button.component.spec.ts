import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptButtonComponent } from './crypt-button.component';

describe('CryptButtonComponent', () => {
  let component: CryptButtonComponent;
  let fixture: ComponentFixture<CryptButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
