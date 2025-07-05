import { TestBed } from '@angular/core/testing';

import { JupitarService } from './jupitar.service';

describe('JupitarService', () => {
  let service: JupitarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JupitarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
