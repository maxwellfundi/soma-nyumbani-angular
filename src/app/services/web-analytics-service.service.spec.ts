import { TestBed } from '@angular/core/testing';

import { WebAnalyticsServiceService } from './web-analytics-service.service';

describe('WebAnalyticsServiceService', () => {
  let service: WebAnalyticsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebAnalyticsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
