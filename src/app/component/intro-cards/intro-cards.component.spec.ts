import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroCardsComponent } from './intro-cards.component';

describe('IntroCardsComponent', () => {
  let component: IntroCardsComponent;
  let fixture: ComponentFixture<IntroCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
