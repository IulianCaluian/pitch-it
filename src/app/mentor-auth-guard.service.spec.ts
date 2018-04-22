import { TestBed, inject } from '@angular/core/testing';

import { MentorAuthGuardService } from './mentor-auth-guard.service';

describe('MentorAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MentorAuthGuardService]
    });
  });

  it('should be created', inject([MentorAuthGuardService], (service: MentorAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
