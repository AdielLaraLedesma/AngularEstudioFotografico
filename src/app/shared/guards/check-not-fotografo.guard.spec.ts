import { TestBed } from '@angular/core/testing';

import { CheckNotFotografoGuard } from './check-not-fotografo.guard';

describe('CheckNotFotografoGuard', () => {
  let guard: CheckNotFotografoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckNotFotografoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
