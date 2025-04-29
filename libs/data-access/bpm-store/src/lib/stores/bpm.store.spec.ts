import { TestBed } from '@angular/core/testing';

import { BpmStore } from './bpm.store';

let store: BpmStore;

describe('BpmStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
    store = TestBed.inject(BpmStore);
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
  });
});
