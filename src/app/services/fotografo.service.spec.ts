import { TestBed } from '@angular/core/testing';

import { FotografoService } from './fotografo.service';

describe('FotografoService', () => {
  let service: FotografoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FotografoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
