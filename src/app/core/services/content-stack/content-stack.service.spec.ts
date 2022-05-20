import { TestBed } from '@angular/core/testing';

import { ContentStackService } from './content-stack.service';

describe('ContentStackService', () => {
  let service: ContentStackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentStackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
