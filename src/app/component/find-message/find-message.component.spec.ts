import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMessageComponent } from './find-message.component';

describe('FindMessageComponent', () => {
  let component: FindMessageComponent;
  let fixture: ComponentFixture<FindMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
