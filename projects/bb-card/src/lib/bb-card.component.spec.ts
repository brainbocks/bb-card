import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbCardComponent } from './bb-card.component';

describe('BbCardComponent', () => {
  let component: BbCardComponent;
  let fixture: ComponentFixture<BbCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BbCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BbCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
