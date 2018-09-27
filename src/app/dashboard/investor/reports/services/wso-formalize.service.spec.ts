import { TestBed, inject } from '@angular/core/testing';

import { WsoFormalizeService } from './wso-formalize.service';

describe('WsoFormalizeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WsoFormalizeService]
    });
  });

  it('should be created', inject([WsoFormalizeService], (service: WsoFormalizeService) => {
    expect(service).toBeTruthy();
  }));
});
