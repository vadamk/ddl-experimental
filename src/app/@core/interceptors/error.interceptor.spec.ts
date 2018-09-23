import { TestBed, inject } from '@angular/core/testing';

import { ErrorInterceptor } from '@core/interceptors/error.interceptor';

describe('ErrorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorInterceptor]
    });
  });

  it('should be created', inject([ErrorInterceptor], (service: ErrorInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
