import { TestBed } from '@angular/core/testing';

import { FakeAuthGuard } from './fake-auth.guard';

describe('FakeAuthGuard', () => {
  let guard: FakeAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FakeAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
