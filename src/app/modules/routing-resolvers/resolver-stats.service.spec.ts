import { TestBed } from '@angular/core/testing';

import { ResolverStatsService } from './resolver-stats.service';

describe('ResolverStatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolverStatsService = TestBed.get(ResolverStatsService);
    expect(service).toBeTruthy();
  });
});
