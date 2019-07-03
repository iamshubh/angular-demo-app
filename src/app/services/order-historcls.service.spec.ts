import { TestBed } from '@angular/core/testing';

import { OrderHistorclsService } from './order-historcls.service';

describe('OrderHistorclsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderHistorclsService = TestBed.get(OrderHistorclsService);
    expect(service).toBeTruthy();
  });
});
