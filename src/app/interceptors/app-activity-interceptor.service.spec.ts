import { TestBed } from '@angular/core/testing';

import { AppActivityInterceptorService } from './app-activity-interceptor.service';

describe('AppActivityInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppActivityInterceptorService = TestBed.get(AppActivityInterceptorService);
    expect(service).toBeTruthy();
  });
});
