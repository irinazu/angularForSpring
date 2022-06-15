import { TestBed } from '@angular/core/testing';

import { ObjectCService } from './object-c.service';

describe('ObjectCService', () => {
  let service: ObjectCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
