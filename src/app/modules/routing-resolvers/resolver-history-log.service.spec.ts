import { TestBed } from '@angular/core/testing';

import { HistoryLogService } from './resolver-history-log.service';

describe('HistoryLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistoryLogService = TestBed.get(HistoryLogService);
    expect(service).toBeTruthy();
  });
});
