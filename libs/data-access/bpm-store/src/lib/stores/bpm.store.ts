import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { IBeat } from '../interfaces/beat.interface';

@Injectable({
  providedIn: 'root'
})
export class BpmStore {
  tapCache: BehaviorSubject<IBeat[]> = new BehaviorSubject<IBeat[]>([]);
  maxLength: number = 5;

  constructor() { }

  recordTap(): void {
    
  }

  reset(): void {
    this.tapCache.next([]);
  }
}
