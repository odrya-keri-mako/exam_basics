import { Component, inject } from '@angular/core';
import { AppState } from '../../services/app-state';

@Component({
  selector: 'app-page1',
  imports: [],
  templateUrl: './page1.html',
  styleUrl: './page1.css',
})
export class Page1 {

  appState = inject(AppState);

  constructor() {
    console.log('Page1 controller...', this.appState.pageID);
  }
}
