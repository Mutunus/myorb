import { TestBed } from '@angular/core/testing';

import { ProceduresService } from './procedures.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ProceduresService', () => {
  let service: ProceduresService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ProceduresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
