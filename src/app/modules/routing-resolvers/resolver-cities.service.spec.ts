import { TestBed } from '@angular/core/testing';

import { ResolverCitiesService } from './resolver-cities.service';

describe('ResolverCitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolverCitiesService = TestBed.get(ResolverCitiesService);
    expect(service).toBeTruthy();
  });
});
