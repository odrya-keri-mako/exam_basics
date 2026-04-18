# Vue ![Vue](./img/vue.png)

### Create project
```bash
npm create vue@latest exam_basics_vue
# Select JavaScript and Vue Router, the rest is not needed.

cd exam_basics_vue
npm install
npm install bootstrap @fortawesome/fontawesome-free
```

### Project folder structure
```text
exam_basics_vue/
├── public/
│   └── favicon.png
├── src/
│   ├── assets/
│   │   └── main.css
│   ├── components/
│   │   ├── AppFooter.vue
│   │   └── AppHeader.vue
│   ├── router/
│   │   └── index.js
│   ├── views/
│   │   ├── HomeView.vue
│   │   ├── Page1View.vue
│   │   └── Page2View.vue
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

### Delete unnecessary *folders*, *files*
```bash
# These commands are different in Windows PowerShell!
rm ./public/favicon.ico
rm ./src/assets/base.css
rm ./src/assets/logo.svg
rm -rf ./src/components/icons
rm ./src/components/HelloWorld.vue
rm ./src/components/TheWelcome.vue
rm ./src/components/WelcomeItem.vue
rm ./src/views/AboutView.vue
```

### Create necessary *folders*, *files*
```bash
touch ./src/components/AppHeader.vue
touch ./src/components/AppFooter.vue
touch ./src/views/Page1View.vue
touch ./src/views/Page2View.vue
```

### Copy from *exam_basics_task/assets/image/favicon.png* to *public* folder
```bash
# This command is different in Windows PowerShell!
cp ../exam_basics_task/assets/image/favicon.png ./public/favicon.png
```

### Modify *index.html*
```html
<!DOCTYPE html>
<html lang="hu">
  <head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/png" href="/favicon.png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vizsgafeladat-indító Vue</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

### Modify *src/main.js*
```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/main.css'

createApp(App).use(router).mount('#app')
```

### Modify *src/router/index.js*
```js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Page1View from '../views/Page1View.vue'
import Page2View from '../views/Page2View.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home',  name: 'home',  component: HomeView },
  { path: '/page1', name: 'page1', component: Page1View },
  { path: '/page2', name: 'page2', component: Page2View }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

### Modify *src/App.vue*
```html
<template>
  <div class="app-container position-relative 
              d-flex flex-column vh-100 
              overflow-x-hidden overflow-y-auto">
    <AppHeader />
    <main class="position-relative flex-fill">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>
```

### Modify *src/components/AppHeader.vue*
```html
<template>
  <nav class="navbar navbar-expand-sm 
              bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <button
        class="navbar-toggler ms-auto"
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
          <li class="nav-item text-small-caps btn-click-effect rounded">
            <RouterLink class="nav-link" to="/home">
              <i class="fa-solid fa-house me-1"></i>
              <span>Kezdőoldal</span>
            </RouterLink>
          </li>

          <li class="nav-item text-small-caps btn-click-effect rounded">
            <RouterLink class="nav-link" to="/page1">
              <i class="fa-solid fa-face-smile-beam me-1"></i>
              <span>Oldal 1</span>
            </RouterLink>
          </li>

          <li class="nav-item text-small-caps btn-click-effect rounded">
            <RouterLink class="nav-link" to="/page2">
              <i class="fa-solid fa-face-grin-tears me-1"></i>
              <span>Oldal 2</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-item:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.nav-link.router-link-active {
  text-decoration: underline;
  pointer-events: none;
}
.btn-click-effect:not(.disabled):active {
  animation: btnClickEffect 0.4s;
}
@keyframes btnClickEffect {
  0% { transform: none; }
  50% { transform: scale(0.9); }
  100% { transform: none; }
}
</style>
```

### Modify *src/components/AppFooter.vue*
```html
<template>
  <div class="container-fluid bg-body-tertiary">
    <p class="fw-lighter fs-xs text-center mb-0 py-2">
      <span>&copy; Copyright&nbsp;&nbsp;2021-{{ currentYear }}</span>
      <span class="ms-2">Keri Informatika, Makó</span>
    </p>
  </div>
</template>

<script setup>
console.log('Footer controller')
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.fs-xs {
  font-size: 0.75em;
}
</style>
```

### Modify *src/views/HomeView.vue* 
```html
<template>
  <div class="container h-100 scale-in">
    <div class="row h-100 align-items-center">
      <h1 class="text-center text-small-caps display-1 page-title">
        <i class="fa-solid fa-house me-1"></i>
        <span>Kezdőoldal</span>
      </h1>
    </div>
  </div>
</template>

<script setup>
console.log('Home controller...')
</script>

<style scoped>
.page-title {
  color: red;
}
</style>
```

### Modify *src/views/Page1View.vue*
```html
<template>
  <div class="container h-100 scale-in">
    <div class="row h-100 align-items-center">
      <h1 class="text-center text-small-caps display-1 page-title">
        <i class="fa-solid fa-face-smile-beam me-1"></i>
        <span>Oldal 1</span>
      </h1>
    </div>
  </div>
</template>

<script setup>
console.log('Page1 controller...')
</script>

<style scoped>
.page-title {
  color: blue;
}
</style>
```

### Modify *src/views/Page2View.vue* 
```html
<template>
  <div class="container h-100 scale-in">
    <div class="row h-100 align-items-center">
      <h1 class="text-center text-small-caps display-1 page-title">
        <i class="fa-solid fa-face-grin-tears me-1"></i>
        <span>Oldal 2</span>
      </h1>
    </div>
  </div>
</template>

<script setup>
console.log('Page2 controller...')
</script>

<style scoped>
.page-title {
  color: green;
}
</style>
```

### Modify *src/assets/main.css*
```css
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



### Start
```bash
npm run dev
```