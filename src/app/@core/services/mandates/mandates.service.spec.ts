import { TestBed, inject } from '@angular/core/testing';

import { MandatesService } from '@app/@core/services/mandates/mandates.service';

describe('MandatesCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MandatesService]
    });
  });

  it('should be created', inject([MandatesService], (service: MandatesService) => {
    expect(service).toBeTruthy();
  }));
});
