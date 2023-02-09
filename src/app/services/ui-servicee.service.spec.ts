import { TestBed } from '@angular/core/testing';

import { UiServiceeService } from './ui-servicee.service';

describe('UiServiceeService', () => {
  let service: UiServiceeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiServiceeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
