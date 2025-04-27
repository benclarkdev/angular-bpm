import { Component } from '@angular/core';
import { ControlsComponent } from '@bpm/controls';
import { ScoreboardComponent } from '@bpm/scoreboard';

@Component({
  selector: 'bpm-dashboard',
  standalone: true,
  imports: [
    ControlsComponent,
    ScoreboardComponent
  ],
  templateUrl: 'dashboard.component.html',
  styleUrl: 'dashboard.component.scss'
})
export class DashboardComponent {

}
