import { TestBed } from '@angular/core/testing';

import { AddToastService } from './add-toast.service';

describe('AddToastService', () => {
  let service: AddToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
