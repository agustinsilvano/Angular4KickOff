import { TestBed } from '@angular/core/testing';

import { LandingDataService } from './landing-data.service';

describe('LandingDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LandingDataService = TestBed.get(LandingDataService);
    expect(service).toBeTruthy();
  });
});
