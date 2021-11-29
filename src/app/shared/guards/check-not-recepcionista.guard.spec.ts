import { TestBed } from '@angular/core/testing';

import { CheckNotRecepcionistaGuard } from './check-not-recepcionista.guard';

describe('CheckNotRecepcionistaGuard', () => {
  let guard: CheckNotRecepcionistaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckNotRecepcionistaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
