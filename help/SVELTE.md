# Svelte ![Svelte](./img/svelte.png)

## Create project
```bash
npx sv create exam_basics_svelte
# Select SvelteKit and JavaScript, the rest is default or not needed.

cd exam_basics_svelte
npm install
npm install bootstrap @fortawesome/fontawesome-free
```

## Project folder structure
```text
exam_basics_svelte/
├── static/
│   └── favicon.png
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── AppFooter.svelte
│   │   │   └── AppHeader.svelte
│   │   └── stores/
│   │       └── app-state.js
│   ├── routes/
│   │   ├── home/
│   │   │   └── +page.svelte
│   │   ├── page1/
│   │   │   └── +page.svelte
│   │   ├── page2/
│   │   │   └── +page.svelte
│   │   ├── +layout.svelte
│   │   └── +page.js
│   ├── app.css
│   └── app.html
├── jsconfig.json
├── package-lock.json
├── package.json
├── README.md
├── svelte.config.js
└── vite.config.js
```

## Delete unnecessary folders and files
```bash
rm -f ./src/app.d.ts
rm -rf ./src/lib/assets
rm -f ./static/robots.txt
rm -f ./src/lib/index.js
rm -f ./src/routes/+page.svelte
```

## Copy from *exam_basics_task/assets/image/favicon.png* to *static* folder
```bash
cp ../exam_basics_task/assets/image/favicon.png ./static/favicon.png
```

## Create necessary *folders*, *files*
```bash
touch ./src/app.css
mkdir -p src/lib/stores
touch ./src/lib/stores/app-state.js
touch ./src/routes/+page.js
mkdir -p src/lib/components
touch ./src/lib/components/AppHeader.svelte
touch ./src/lib/components/AppFooter.svelte
mkdir -p src/routes/home
touch ./src/routes/home/+page.svelte
mkdir -p src/routes/page1
touch ./src/routes/page1/+page.svelte
mkdir -p src/routes/page2
touch ./src/routes/page2/+page.svelte
```

## Modify *src/app.html*
```html
!doctype html>
<html lang="hu">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/png" href="%sveltekit.assets%/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Vizsgafeladat-indító Svelte</title>
    %sveltekit.head%
  </head>
  <body data-sveltekit-preload-data="hover">
    <div style="display: contents">%sveltekit.body%</div>
  </body>
</html>
```

## Modify *src/app.css*
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

## Modify *src/lib/stores/app-state.js*
```js
import { writable } from 'svelte/store';

export const pageID = writable('home');
```

## Modify *src/routes/+page.js*
```js
import { redirect } from '@sveltejs/kit';

export function load() {
  throw redirect(307, '/home');
}
```

## Modify *src/routes/+layout.svelte*
```html
<script>
  import '../app.css';
  import { onMount } from 'svelte';
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/state';
  import AppHeader from '$lib/components/AppHeader.svelte';
  import AppFooter from '$lib/components/AppFooter.svelte';
  import { pageID } from '$lib/stores/app-state.js';

  let { children } = $props();

  function syncPageID() {
    const path = page.url.pathname;

    if (path === '/home') pageID.set('home');
    else if (path === '/page1') pageID.set('page1');
    else if (path === '/page2') pageID.set('page2');
    else pageID.set('home');
  }

  onMount(async () => {
    await import('bootstrap/dist/js/bootstrap.bundle.min.js');
    syncPageID();
  });

  afterNavigate(() => {
    syncPageID();
  });
</script>

<div class="app-container position-relative 
						d-flex flex-column vh-100 
						overflow-x-hidden overflow-y-auto">
  <AppHeader />
  <main class="position-relative flex-fill">
    {@render children()}
  </main>
  <AppFooter />
</div>
```

## Modify *src/lib/components/AppHeader.svelte*
```html
<script>
  import { page } from '$app/state';
</script>

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
          <a class:active-link={page.url.pathname === '/home'} 
             class="nav-link" 
             href="/home">
            <i class="fa-solid fa-house me-1"></i>
            <span>Kezdőoldal</span>
          </a>
        </li>

        <!-- Page1 -->
        <li class="nav-item text-small-caps btn-click-effect rounded">
          <a class:active-link={page.url.pathname === '/page1'} 
             class="nav-link" 
             href="/page1">
            <i class="fa-solid fa-face-smile-beam me-1"></i>
            <span>Oldal 1</span>
          </a>
        </li>

        <!-- Page2 -->
        <li class="nav-item text-small-caps btn-click-effect rounded">
          <a class:active-link={page.url.pathname === '/page2'} 
             class="nav-link" 
             href="/page2">
            <i class="fa-solid fa-face-grin-tears me-1"></i>
            <span>Oldal 2</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style>
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
</style>
```

## Modify *src/lib/components/AppFooter.svelte*
```html
<script>
  const currentYear = new Date().getFullYear();
</script>

<div class="container-fluid bg-body-tertiary">
  <p class="fw-lighter fs-xs text-center mb-0 py-2">
    <span>&copy; Copyright&nbsp;&nbsp;2021-{currentYear}</span>
    <span class="ms-2">Keri Informatika, Makó</span>
  </p>
</div>
```

## Modify *src/routes/home/+page.svelte*
```html
<script>
  import { pageID } from '$lib/stores/app-state.js';
  console.log(`${pageID} controller...`);
</script>

<div class="container h-100 scale-in">
  <div class="row h-100 align-items-center">
    <h1 class="text-center text-small-caps display-1 page-title">
      <i class="fa-solid fa-house me-1"></i>
      <span>Kezdőoldal</span>
    </h1>
  </div>
</div>

<style>
  .page-title {
    color: red;
  }
</style>
```

## Modify *src/routes/page1/+page.svelte*
```html
<script>
  import { pageID } from '$lib/stores/app-state.js';
  console.log(`${pageID} controller...`);
</script>

<div class="container h-100 scale-in">
  <div class="row h-100 align-items-center">
    <h1 class="text-center text-small-caps display-1 page-title">
      <i class="fa-solid fa-face-smile-beam me-1"></i>
      <span>Oldal 1</span>
    </h1>
  </div>
</div>

<style>
  .page-title {
    color: blue;
  }
</style>
```

## Modify *src/routes/page2/+page.svelte*
```html
<script>
  import { pageID } from '$lib/stores/app-state.js';
  console.log(`${pageID} controller...`);
</script>

<div class="container h-100 scale-in">
  <div class="row h-100 align-items-center">
    <h1 class="text-center text-small-caps display-1 page-title">
      <i class="fa-solid fa-face-grin-tears me-1"></i>
      <span>Oldal 2</span>
    </h1>
  </div>
</div>

<style>
  .page-title {
    color: green;
  }
</style>
```

## Start
```bash
npm run dev
```
