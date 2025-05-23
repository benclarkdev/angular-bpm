import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreboardComponent } from './scoreboard.component';
let component: ScoreboardComponent;
let fixture: ComponentFixture<ScoreboardComponent>;

describe('ScoreboardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreboardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
