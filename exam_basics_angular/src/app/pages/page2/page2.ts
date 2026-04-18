import { Component, inject } from '@angular/core';
import { AppState } from '../../services/app-state';

@Component({
  selector: 'app-page2',
  imports: [],
  templateUrl: './page2.html',
  styleUrl: './page2.css',
})
export class Page2 {

  appState = inject(AppState);

  constructor() {
    console.log('Page2 controller...', this.appState.pageID);
  }
}
