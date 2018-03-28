import { TestBed, inject } from '@angular/core/testing';

import { AffaireServiceService } from './affaire-service.service';

describe('AffaireServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AffaireServiceService]
    });
  });

  it('should be created', inject([AffaireServiceService], (service: AffaireServiceService) => {
    expect(service).toBeTruthy();
  }));
});
