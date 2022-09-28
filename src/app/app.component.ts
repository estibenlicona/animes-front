import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgressBarService } from './core/component/services/progress-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  progressBar$: Observable<boolean> = new Observable<boolean>();
  title = 'Animes';

  constructor(private _progressBarService: ProgressBarService) {}
  ngOnInit(): void {
    this.progressBar$ = this._progressBarService.getShowProgressBar;
  }
}
