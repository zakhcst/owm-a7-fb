import { TestBed } from '@angular/core/testing';

import { ResolverIpService } from './resolver-ip.service';

describe('ResolverIpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolverIpService = TestBed.get(ResolverIpService);
    expect(service).toBeTruthy();
  });
});
