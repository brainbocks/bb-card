import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardExpiryComponent } from './card-expiry.component';

describe('CardExpiryComponent', () => {
  let component: CardExpiryComponent;
  let fixture: ComponentFixture<CardExpiryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CardExpiryComponent],
      imports: [],
    }).compileComponents();

    fixture = TestBed.createComponent(CardExpiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
