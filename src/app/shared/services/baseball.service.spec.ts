import { TestBed } from '@angular/core/testing';

import { BaseballService } from './baseball.service';

describe('BaseballService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseballService = TestBed.get(BaseballService);
    expect(service).toBeTruthy();
  });
});
