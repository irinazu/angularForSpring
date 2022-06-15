import { TestBed } from '@angular/core/testing';

import { ObjectTypeServiceService } from './object-type-service.service';

describe('ObjectTypeServiceService', () => {
  let service: ObjectTypeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectTypeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
