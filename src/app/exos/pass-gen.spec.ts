import { TestBed } from '@angular/core/testing';

import { PassGen } from './pass-gen.service';

describe('PassGen', () => {
  let service: PassGen;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassGen);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
