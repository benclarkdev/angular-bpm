import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { average } from '@bpm/utilities';

const MINUTE_IN_MS = 60000;

@Injectable({
  providedIn: 'root'
})
export class BpmStore {
  private tempoSubj: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  tempo$: Observable<number> = this.tempoSubj.asObservable();

  intervalCache: number[] = [];

  lastClickTime!: number | null;

  constructor() { }

  calculateTempo(): number {
    const averageInterval =  average(this.intervalCache);

    return MINUTE_IN_MS / averageInterval;
  }

  recordTap(latestClickDate: Date): void {
    const latestClickTime = latestClickDate.getTime();

    // if this is the first click, we cannot do anything
    if (!this.lastClickTime) {
      // overwrite and exit
      this.lastClickTime = latestClickTime
      return;
    }

    // otherwise, find the interval since the last click time
    this.intervalCache.push(latestClickTime - this.lastClickTime);

    // calculate the tempo and publish
    this.tempoSubj.next(this.calculateTempo());
    
    // overwrite the last click time
    this.lastClickTime = latestClickTime;
  }

  reset(): void {
    this.lastClickTime = null;
    this.tempoSubj.next(0);
  }
}
