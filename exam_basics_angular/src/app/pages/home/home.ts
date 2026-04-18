import { Component, inject } from '@angular/core';
import { AppState } from '../../services/app-state';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  
  appState = inject(AppState);

  constructor() {
    console.log('Home controller...', this.appState.pageID);
  }
}
