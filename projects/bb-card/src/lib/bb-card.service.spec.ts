import { TestBed } from '@angular/core/testing';

import { BbCardService } from './bb-card.service';

describe('BbCardService', () => {
  let service: BbCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BbCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
