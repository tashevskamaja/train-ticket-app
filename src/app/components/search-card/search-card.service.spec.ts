import { TestBed } from '@angular/core/testing';

import { SearchService } from 'src/app/components/search-card/search-card.service';

describe('SearchCardService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
