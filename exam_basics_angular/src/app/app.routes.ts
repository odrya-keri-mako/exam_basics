import { Routes } from '@angular/router';
import { Home }  from './pages/home/home';
import { Page1 } from './pages/page1/page1';
import { Page2 } from './pages/page2/page2';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: Home  },
  { path: 'page1', component: Page1 },
  { path: 'page2', component: Page2 }
];