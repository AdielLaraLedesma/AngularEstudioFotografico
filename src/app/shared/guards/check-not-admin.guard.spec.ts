import { TestBed } from '@angular/core/testing';

import { CheckNotAdminGuard } from './check-not-admin.guard';

describe('CheckNotAdminGuard', () => {
  let guard: CheckNotAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckNotAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
