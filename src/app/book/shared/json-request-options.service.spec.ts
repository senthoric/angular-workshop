/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JsonRequestOptionsService } from './json-request-options.service';

describe('JsonRequestOptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonRequestOptionsService]
    });
  });

  it('should ...', inject([JsonRequestOptionsService], (service: JsonRequestOptionsService) => {
    expect(service).toBeTruthy();
  }));
});
