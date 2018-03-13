import { TestBed, async, inject } from '@angular/core/testing';

import { AlwaysAuthGuardGuard } from './always-auth.guard';

describe('AlwaysAuthGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlwaysAuthGuardGuard]
    });
  });

  it('should ...', inject([AlwaysAuthGuardGuard], (guard: AlwaysAuthGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
