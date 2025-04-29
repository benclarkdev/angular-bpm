import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DashboardComponent } from '@bpm/dashboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DashboardComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-bpm';
}
