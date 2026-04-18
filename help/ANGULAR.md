# Angular ![Angular](./img/angular.png)

### Create project
```bash
ng new exam_basics_angular
# Select stylesheet format: css, the rest is not needed.
cd exam_basics_angular
npm install
npm install bootstrap @fortawesome/fontawesome-free
```

### Project folder structure
```text
exam_basics_angular/
├── public/
│   └── favicon.png
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── app-footer/
│   │   │   │   ├── app-footer.css
│   │   │   │   ├── app-footer.html
│   │   │   │   ├── app-footer.spec.ts
│   │   │   │   └── app-footer.ts
│   │   │   └── app-header/
│   │   │   │   ├── app-header.css
│   │   │   │   ├── app-header.html
│   │   │   │   ├── app-header.spec.ts
│   │   │   │   └── app-header.ts
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   │   ├── home.css
│   │   │   │   ├── home.html
│   │   │   │   ├── home.spec.ts
│   │   │   │   └── home.ts
│   │   │   ├── page1/
│   │   │   │   ├── page1.css
│   │   │   │   ├── page1.html
│   │   │   │   ├── page1.spec.ts
│   │   │   │   └── page1.ts
│   │   │   └── page2/
│   │   │   │   ├── page2.css
│   │   │   │   ├── page2.html
│   │   │   │   ├── page2.spec.ts
│   │   │   │   └── page2.ts
│   │   ├── services/
│   │   │   ├── app-state.spec.ts
│   │   │   └── app-state.ts
│   │   ├── app.config.ts
│   │   ├── app.css
│   │   ├── app.html
│   │   ├── app.routes.ts
│   │   └── app.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

### Delete unnecessary *folders*, *files*
```bash
# These commands are different in Windows PowerShell!
rm ./public/favicon.ico
```

### Copy from *exam_basics_task/assets/image/favicon.png* to *public* folder
```bash
# This command is different in Windows PowerShell!
cp ../exam_basics_task/assets/image/favicon.png ./public/favicon.png
```

### Create necessary *components*, *services*
```bash
ng generate component components/app-header
ng generate component components/app-footer
ng generate component pages/home
ng generate component pages/page1
ng generate component pages/page2
ng generate service services/app-state
```


### Modify *src/index.html*
```html
<!doctype html>
<html lang="hu">
<head>
  <meta charset="utf-8">
  <title>Vizsgafeladat-indító Angular</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/png" href="/favicon.png">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

### Modify *src/styles.css*
```css
@import 'bootstrap/dist/css/bootstrap.min.css';
@import '@fortawesome/fontawesome-free/css/all.min.css';

*:not(input):not(textarea) {
  user-select: none !important;
  outline-style: none !important;
}
.text-small-caps {
  font-variant: small-caps !important;
}
.scale-in {
  animation: scaleIn 0.6s ease both;
}
@keyframes scaleIn {
  0%   { opacity: 0; transform: scale(0); }
  25%  { opacity: 0; transform: scale(0); }
  100% { opacity: 1; transform: scale(1); }
}
```



### Modify *src/app/app.routes.ts*
```ts
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
```

### Modify *src/app/app.config.ts*
```ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};
```

### Modify *src/app/services/app-state.ts*
```ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class AppState {
  pageID = 'home';
}
```

### Modify *src/app/app.ts*
```ts
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

        if (currentUrl === '/home')       this.appState.pageID = 'home';
        else if (currentUrl === '/page1') this.appState.pageID = 'page1';
        else if (currentUrl === '/page2') this.appState.pageID = 'page2';
        else this.appState.pageID = 'home';

        (window as any).APP = (window as any).APP || {};
        (window as any).APP.pageID = this.appState.pageID;
      });
  }
}
```

### Modify *src/app/app.html*
```html
<div class="app-container position-relative 
            d-flex flex-column vh-100 
            overflow-x-hidden overflow-y-auto">
  <app-app-header></app-app-header>

  <main class="position-relative flex-fill">
    <router-outlet></router-outlet>
  </main>

  <app-app-footer></app-app-footer>
</div>
```

### Modify *src/app/app.css*
```css
/* can remain empty */
```

### Modify *src/app/components/app-header/app-header.ts*
```ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './app-header.html',
  styleUrl: './app-header.css',
})
export class AppHeader {}
```

### Modify *src/app/components/app-header/app-header.html*
```html
<nav class="navbar navbar-expand-sm bg-body-tertiary sticky-top">
  <div class="container-fluid">
    <button class="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="navbarNav" class="collapse navbar-collapse">
      <ul class="navbar-nav mx-auto mt-3 mt-sm-0 text-center">

        <!-- Home -->
        <li class="nav-item text-small-caps btn-click-effect rounded">
          <a  class="nav-link"
              routerLink="/home"
              routerLinkActive="active-link"
              [routerLinkActiveOptions]="{ exact: true }">
            <i class="fa-solid fa-house me-1"></i>
            <span>Kezdőoldal</span>
          </a>
        </li>

        <!-- Page1 -->
        <li class="nav-item text-small-caps btn-click-effect rounded">
          <a  class="nav-link"
              routerLink="/page1"
              routerLinkActive="active-link">
            <i class="fa-solid fa-face-smile-beam me-1"></i>
            <span>Oldal 1</span>
          </a>
        </li>

        <!-- Page2 -->
        <li class="nav-item text-small-caps btn-click-effect rounded">
          <a  class="nav-link"
              routerLink="/page2"
              routerLinkActive="active-link">
            <i class="fa-solid fa-face-grin-tears me-1"></i>
            <span>Oldal 2</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

### Modify *src/app/components/app-header/app-header.css*
```css
.nav-item:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.active-link {
  text-decoration: underline !important;
  pointer-events: none;
}
.btn-click-effect:not(.disabled):active {
  animation: btnClickEffect 0.4s;
}
@keyframes btnClickEffect {
  0%   { transform: none; }
  50%  { transform: scale(0.9); }
  100% { transform: none; }
}
```

### Modify *src/app/components/app-footer/app-footer.ts*
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-app-footer',
  imports: [],
  templateUrl: './app-footer.html',
  styleUrl: './app-footer.css',
})
export class AppFooter {
  currentYear = new Date().getFullYear();
}
```

### Modify *src/app/components/app-footer/app-footer.html*
```html
<div class="container-fluid bg-body-tertiary">
  <p class="fw-lighter fs-xs text-center mb-0 py-2">
    <span>&copy; Copyright&nbsp;&nbsp;2021-{{ currentYear }}</span>
    <span class="ms-2">Keri Informatika, Makó</span>
  </p>
</div>
```

### Modify *src/app/components/app-footer/app-footer.css*
```css
.fs-xs {
  font-size: 0.75em;
}
```

### Modify *src/app/pages/home/home.ts*
```ts
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
```

### Modify *src/app/pages/home/home.html*
```html
<div class="container h-100 scale-in">
  <div class="row h-100 align-items-center">
    <h1 class="text-center text-small-caps display-1 page-title">
      <i class="fa-solid fa-house me-1"></i>
      <span>Kezdőoldal</span>
    </h1>
  </div>
</div>
```

### Modify *src/app/pages/home/home.css*
```css
.page-title {
  color: red;
}
```

### Modify *src/app/pages/page1/page1.ts*
```ts
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
```

### Modify *src/app/pages/page1/page1.html*
```html
<div class="container h-100 scale-in">
  <div class="row h-100 align-items-center">
    <h1 class="text-center text-small-caps display-1 page-title">
      <i class="fa-solid fa-face-smile-beam me-1"></i>
      <span>Oldal 1</span>
    </h1>
  </div>
</div>
```

### Modify *src/app/pages/page1/page1.css*
```css
.page-title {
  color: blue;
}
```

### Modify *src/app/pages/page2/page2.ts*
```ts
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
```

### Modify *src/app/pages/page2/page2.html*
```html
<div class="container h-100 scale-in">
  <div class="row h-100 align-items-center">
    <h1 class="text-center text-small-caps display-1 page-title">
      <i class="fa-solid fa-face-grin-tears me-1"></i>
      <span>Oldal 2</span>
    </h1>
  </div>
</div>
```

### Modify *src/app/pages/page2/page2.css*
```css
.page-title {
  color: green;
}
```

### Modify *angular.json*
```json
// create "projects.exam_basics_angular.architect.build.options" new property "scripts"
{
  "... options": {
          "scripts": [
            "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
          ]
  }
}
```

### Modify *tsconfig.app.json*
```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app",
    "rootDir": "./src",
    "types": []
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "src/**/*.spec.ts"
  ]
}
```

### Modify *tsconfig.spec.json*
```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "rootDir": "./src",
    "types": [
      "vitest/globals"
    ]
  },
  "include": [
    "src/**/*.d.ts",
    "src/**/*.spec.ts"
  ]
}
```

### Start
```bash
ng serve -o
```