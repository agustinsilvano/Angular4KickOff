import { TestBed } from '@angular/core/testing';

import { CanDeactivateNewGuardService } from './can-deactivate-new-guard.service';

describe('CanDeactivateNewGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanDeactivateNewGuardService = TestBed.get(CanDeactivateNewGuardService);
    expect(service).toBeTruthy();
  });
});
