import { TestBed } from '@angular/core/testing';

import { ColleptorGuard } from './colleptor.guard';

describe('ColleptorGuard', () => {
  let guard: ColleptorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ColleptorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
