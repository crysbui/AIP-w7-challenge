import { TestBed } from '@angular/core/testing';

import { WordGuessService } from './word-guess.service';

describe('WordGuessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordGuessService = TestBed.get(WordGuessService);
    expect(service).toBeTruthy();
  });
});
