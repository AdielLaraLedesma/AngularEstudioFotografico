import { TestBed } from '@angular/core/testing';

import { MarcosService } from './marcos.service';

describe('MarcosService', () => {
  let service: MarcosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarcosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
