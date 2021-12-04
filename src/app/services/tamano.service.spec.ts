import { TestBed } from '@angular/core/testing';

import { TamanoService } from './tamano.service';

describe('TamanoService', () => {
  let service: TamanoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TamanoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
