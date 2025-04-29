import { Component } from '@angular/core';

import { BpmStore } from '@bpm/data-access/bpm-store';

@Component({
  selector: 'bpm-controls',
  standalone: true,
  imports: [],
  templateUrl: 'controls.component.html',
  styleUrl: 'controls.component.scss'
})
export class ControlsComponent {
  constructor(
    private bpmStore: BpmStore
  ){}

  clickReset(): void {
    this.bpmStore.reset();
  }

  clickTap(): void {
    this.bpmStore.recordTap(new Date());
  }
}
