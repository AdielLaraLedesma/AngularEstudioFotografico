import { TestBed } from '@angular/core/testing';

import { CheckNotLoginGuard } from './check-not-login.guard';

describe('CheckNotLoginGuard', () => {
  let guard: CheckNotLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckNotLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
