import { TestBed } from '@angular/core/testing';

import { SecuritryService } from './securitry.service';

describe('SecuritryService', () => {
  let service: SecuritryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecuritryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
