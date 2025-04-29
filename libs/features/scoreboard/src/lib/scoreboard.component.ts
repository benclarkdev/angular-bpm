import { Component, OnDestroy, OnInit } from '@angular/core';
import { AsyncPipe, DecimalPipe } from '@angular/common';

import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';

import { BpmStore } from '@bpm/data-access/bpm-store';

@Component({
  selector: 'bpm-scoreboard',
  standalone: true,
  imports: [
    AsyncPipe,
    DecimalPipe
  ],
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.scss'
})
export class ScoreboardComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  tempoSubj: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  tempo$: Observable<number> = this.tempoSubj.asObservable();

  constructor(
    private bpmStore: BpmStore
  ){}

  ngOnInit(): void {
    this.bpmStore.tempo$
      .pipe(takeUntil(this.destroy$))
      .subscribe((tempo) => this.tempoSubj.next(tempo))
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
