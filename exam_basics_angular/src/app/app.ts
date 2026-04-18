import { Component, inject } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { AppHeader } from './components/app-header/app-header';
import { AppFooter } from './components/app-footer/app-footer';
import { AppState } from './services/app-state';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeader, AppFooter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  private router = inject(Router);
  appState = inject(AppState);

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        
        const currentUrl = this.router.url.split('?')[0];

        if      (currentUrl === '/home')  this.appState.pageID = 'home';
        else if (currentUrl === '/page1') this.appState.pageID = 'page1';
        else if (currentUrl === '/page2') this.appState.pageID = 'page2';
        else this.appState.pageID = 'home';

        (window as any).APP = (window as any).APP || {};
        (window as any).APP.pageID = this.appState.pageID;
      });
  }
}
