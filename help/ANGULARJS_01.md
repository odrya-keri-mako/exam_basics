# AngularJs 01 ![AngularJs](./img/angularJs.png)

### Create project
```bash
# These commands are different in Windows PowerShell!
cp -r ../exam_basics_task ./exam_basics_angularJs_01
cd exam_basics_angularJs_01
rm ./index.php
```

### Project folder structure
```text
exam_basics_angularJs_01/
├── assets/
│   └── image/
│       └── favicon.png
├── css/
│   └── app.css
├── html/
│   ├── components/
│   │   ├── footer.html
│   │   └── header.html
│   ├── layouts/
│   │   └── root.html
│   └── pages/
│       ├── home.html
│       ├── page1.html
│       └── page2.html
├── js/
│   └── app.js
└── index.html
```

### Modify *index.html*
```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vizsgafeladat-indító AngularJs</title>
  <link rel="icon" type="image/png" href="./assets/image/favicon.png">

  <!-- Application components -->
  <link rel="stylesheet" href="../components/bootstrap/5.3.8/css/bootstrap.min.css">
  <link rel="stylesheet" href="../components/font-awesome/7.2.0/css/all.min.css">
  <link rel="stylesheet" href="./css/app.css">
</head>
<body ng-app="app">

  <!-- Application root -->
  <ui-view></ui-view>

  <!-- Application components -->
  <script src="../components/angular-js/1.8.2/js/angular.min.js"></script>
  <script src="../components/angular-js/angular-ui-router/1.1.1/js/angular-ui-router.min.js"></script>
  <script src="../components/bootstrap/5.3.8/js/bootstrap.bundle.min.js"></script>
  <script src="./js/app.js"></script>
</body>
</html>
```

### Modify *html/layouts/root.html*
```html
<div class="app-container position-relative
            d-flex flex-column vh-100
            overflow-x-hidden overflow-y-auto">
  <header ui-view="header" class="sticky-top"></header>
  <main ui-view="" class="position-relative flex-fill"></main>
  <footer ui-view="footer"></footer>
</div>
```

### Modify *js/app.js*
```js
;(function(window, angular) {

  'use strict';

  // Application module
  angular.module('app', [
    'ui.router'
  ])

  // Application config
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
      .state('root', {
        views: {
          '': {
            templateUrl: './html/layouts/root.html'
          },
          'header@root': {
            templateUrl: './html/components/header.html'
          },
          'footer@root': {
            templateUrl: './html/components/footer.html',
            controller: 'footerController'
          }
        }
      })
      .state('home', {
        url: '/',
        parent: 'root',
        templateUrl: './html/pages/home.html',
        controller: 'homeController'
      })
      .state('page1', {
        url: '/page1',
        parent: 'root',
        templateUrl: './html/pages/page1.html',
        controller: 'page1Controller'
      })
      .state('page2', {
        url: '/page2',
        parent: 'root',
        templateUrl: './html/pages/page2.html',
        controller: 'page2Controller'
      });

      $urlRouterProvider.otherwise('/');
    }
  ])

  // Application run
  .run([
    '$rootScope',
    function($rootScope) {
      console.log('Run...');
    }
  ])

  // Home controller
  .controller('homeController', [
    '$state',
    '$rootScope',
    '$scope',
    function($state, $rootScope, $scope) {
      $rootScope.pageID = $state.current.name;
      console.log('Home controller...');
    }
  ])

  // Page1 controller
  .controller('page1Controller', [
    '$state',
    '$rootScope',
    '$scope',
    function($state, $rootScope, $scope) {
      $rootScope.pageID = $state.current.name;
      console.log('Page1 controller...');
    }
  ])

  // Page2 controller
  .controller('page2Controller', [
    '$state',
    '$rootScope',
    '$scope',
    function($state, $rootScope, $scope) {
      $rootScope.pageID = $state.current.name;
      console.log('Page2 controller...');
    }
  ])

  // Footer controller
  .controller('footerController', [
    '$scope',
    function($scope) {
      console.log('Footer controller...');
      $scope.currentYear = new Date().getFullYear();
    }
  ]);

})(window, angular);
```

### Modify *html/components/header.html*
```html
<style>
  .nav-item:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .nav-link.active {
    text-decoration: underline;
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

<nav class="navbar navbar-expand-sm bg-body-tertiary">
  <div class="container-fluid">

    <!-- Hamburger icon -->
    <button class="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navbar collapse -->
    <div id="navbarNav" class="collapse navbar-collapse">

      <!-- Navbar centered -->
      <ul class="navbar-nav mx-auto mt-3 mt-sm-0 text-center">

        <!-- Home -->
        <li class="nav-item text-small-caps btn-click-effect rounded">
          <a class="nav-link"
             ui-sref="home"
             ui-sref-active="active">
            <i class="fa-solid fa-house me-1"></i>
            <span>Kezdőoldal</span>
          </a>
        </li>

        <!-- Page1 -->
        <li class="nav-item text-small-caps btn-click-effect rounded">
          <a class="nav-link"
             ui-sref="page1"
             ui-sref-active="active">
            <i class="fa-solid fa-face-smile-beam me-1"></i>
            <span>Oldal 1</span>
          </a>
        </li>

        <!-- Page2 -->
        <li class="nav-item text-small-caps btn-click-effect rounded">
          <a class="nav-link"
             ui-sref="page2"
             ui-sref-active="active">
            <i class="fa-solid fa-face-grin-tears me-1"></i>
            <span>Oldal 2</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

### Modify *html/components/footer.html*
```html
<style>
  .fs-xs {
    font-size: 0.75em;
  }
</style>

<div class="container-fluid bg-body-tertiary">
  <p class="fw-lighter fs-xs text-center mb-0 py-2">
    <span>&copy; Copyright&nbsp;&nbsp;2021-{{ currentYear }}</span>
    <span class="ms-2">Keri Informatika, Makó</span>
  </p>
</div>
```

### Modify *html/pages/home.html*
```html
<style>
  .page-title {
    color: red;
  }
</style>

<div class="container h-100 scale-in">
  <div class="row h-100 align-items-center">
    <h1 class="text-center text-small-caps display-1 page-title">
      <i class="fa-solid fa-house me-1"></i>
      <span>Kezdőoldal</span>
    </h1>
  </div>
</div>
```

### Modify *html/pages/page1.html*
```html
<style>
  .page-title {
    color: blue;
  }
</style>

<div class="container h-100 scale-in">
  <div class="row h-100 align-items-center">
    <h1 class="text-center text-small-caps display-1 page-title">
      <i class="fa-solid fa-face-smile-beam me-1"></i>
      <span>Oldal 1</span>
    </h1>
  </div>
</div>
```

### Modify *html/pages/page2.html*
```html
<style>
  .page-title {
    color: green;
  }
</style>

<div class="container h-100 scale-in">
  <div class="row h-100 align-items-center">
    <h1 class="text-center text-small-caps display-1 page-title">
      <i class="fa-solid fa-face-grin-tears me-1"></i>
      <span>Oldal 2</span>
    </h1>
  </div>
</div>
```

### Modify *css/app.css*
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
Open *index.html* with a local server.
