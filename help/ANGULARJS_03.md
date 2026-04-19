# AngularJs 03 ![AngularJs](./img/angularJs.png)

### Create project
```bash
# These commands are different in Windows PowerShell!
cp -r ../exam_basics_task ./exam_basics_angularJs_03
cd exam_basics_angularJs_03
rm ./index.php
mkdir -p ./js/controllers
touch ./js/controllers/footer.controller.js
touch ./js/controllers/home.controller.js
touch ./js/controllers/page1.controller.js
touch ./js/controllers/page2.controller.js
touch ./css/header.css
touch ./css/footer.css
touch ./css/home.css
touch ./css/page1.css
touch ./css/page2.css
```

### Project folder structure
```text
exam_basics_angularJs_03/
├── assets/
│   └── image/
│       └── favicon.png
├── css/
│   ├── app.css
│   ├── footer.css
│   ├── header.css
│   ├── home.css
│   ├── page1.css
│   └── page2.css
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
│   ├── controllers/
│   │   ├── footer.controller.js
│   │   ├── home.controller.js
│   │   ├── page1.controller.js
│   │   └── page2.controller.js
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
  <link rel="stylesheet" css>
</head>
<body ng-app="app">

  <!-- Application root -->
  <ui-view></ui-view>

  <!-- Application components -->
  <script src="../components/angular-js/1.8.2/js/angular.min.js"></script>
  <script src="../components/angular-js/angular-ui-router/1.1.1/js/angular-ui-router.min.js"></script>
  <script src="../components/angular-js/angular-css/1.0.8/js/angular-css.min.js"></script>
  <script src="../components/angular-js/oclazyload/1.1.0/js/ocLazyLoad.min.js"></script>
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

  // Lazy load files
  const lazyLoad = (files) => {
    if (!Array.isArray(files)) files = [files];
    const paths = files.map(file => file.includes('/')
      ? file
      : `./js/controllers/${file}`);
    return ['$ocLazyLoad', ($ocLazyLoad) => $ocLazyLoad.load(paths)];
  };

  // Application module
  angular.module('app', [
    'ui.router',
    'angularCSS',
    'oc.lazyLoad'
  ])

  // Application config
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
      .state('root', {
        resolve: {
          loadRootDeps: lazyLoad([
            './css/header.css',
            './css/footer.css',
            'footer.controller.js'
          ])
        },
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
        css: './css/home.css',
        templateUrl: './html/pages/home.html',
        controller: 'homeController',
        resolve: { loadRootDeps: lazyLoad('home.controller.js') }
      })
      .state('page1', {
        url: '/page1',
        parent: 'root',
        css: './css/page1.css',
        templateUrl: './html/pages/page1.html',
        controller: 'page1Controller',
        resolve: { loadRootDeps: lazyLoad('page1.controller.js') }
      })
      .state('page2', {
        url: '/page2',
        parent: 'root',
        css: './css/page2.css',
        templateUrl: './html/pages/page2.html',
        controller: 'page2Controller',
        resolve: { loadRootDeps: lazyLoad('page2.controller.js') }
      });

      $urlRouterProvider.otherwise('/');
    }
  ])

  // Application run
  .run([
    '$rootScope',
    '$transitions',
    '$css',
    function($rootScope, $transitions, $css) {

      console.log('Run...');

      // On success transaction
      $transitions.onSuccess({}, (trans) => {

        // Remove the last-state css if it exists
        const fromState = trans.from();
        if (fromState.css) $css.remove(fromState.css);

        // Add the current-state css if it exists
        const toState = trans.to();
        if (toState.css) $css.add(toState.css);

        // Set current state identifier
        $rootScope.pageID = toState.name;
        $rootScope.$applyAsync();
      });
    }
  ]);

})(window, angular);
```

### Modify *js/controllers/footer.controller.js*
```js
;(function(window, angular) {

  'use strict';

  angular.module('app')
  .controller('footerController', [
    '$scope',
    function($scope) {
      console.log('Footer controller...');
      $scope.currentYear = new Date().getFullYear();
    }
  ]);

})(window, angular);
```

### Modify *js/controllers/home.controller.js*
```js
;(function(window, angular) {

  'use strict';

  angular.module('app')
  .controller('homeController', [
    '$state',
    '$rootScope',
    '$scope',
    function($state, $rootScope, $scope) {
      $rootScope.pageID = $state.current.name;
      console.log('Home controller...');
    }
  ]);

})(window, angular);
```

### Modify *js/controllers/page1.controller.js*
```js
;(function(window, angular) {

  'use strict';

  angular.module('app')
  .controller('page1Controller', [
    '$state',
    '$rootScope',
    '$scope',
    function($state, $rootScope, $scope) {
      $rootScope.pageID = $state.current.name;
      console.log('Page1 controller...');
    }
  ]);

})(window, angular);
```

### Modify *js/controllers/page2.controller.js*
```js
;(function(window, angular) {

  'use strict';

  angular.module('app')
  .controller('page2Controller', [
    '$state',
    '$rootScope',
    '$scope',
    function($state, $rootScope, $scope) {
      $rootScope.pageID = $state.current.name;
      console.log('Page2 controller...');
    }
  ]);

})(window, angular);
```

### Modify *html/components/header.html*
```html
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
        <li class="nav-item text-small-caps btn-click-effect rounded">
          <a class="nav-link" ui-sref="home" ui-sref-active="active">
            <i class="fa-solid fa-house me-1"></i>
            <span>Kezdőoldal</span>
          </a>
        </li>

        <li class="nav-item text-small-caps btn-click-effect rounded">
          <a class="nav-link" ui-sref="page1" ui-sref-active="active">
            <i class="fa-solid fa-face-smile-beam me-1"></i>
            <span>Oldal 1</span>
          </a>
        </li>

        <li class="nav-item text-small-caps btn-click-effect rounded">
          <a class="nav-link" ui-sref="page2" ui-sref-active="active">
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
<div class="container-fluid bg-body-tertiary">
  <p class="fw-lighter fs-xs text-center mb-0 py-2">
    <span>&copy; Copyright&nbsp;&nbsp;2021-{{ currentYear }}</span>
    <span class="ms-2">Keri Informatika, Makó</span>
  </p>
</div>
```

### Modify *html/pages/home.html*
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

### Modify *html/pages/page1.html*
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

### Modify *html/pages/page2.html*
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

### Modify *css/header.css*
```css
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
```

### Modify *css/footer.css*
```css
.fs-xs {
  font-size: 0.75em;
}
```

### Modify *css/home.css*
```css
.page-title {
  color: red;
}
```

### Modify *css/page1.css*
```css
.page-title {
  color: blue;
}
```

### Modify *css/page2.css*
```css
.page-title {
  color: green;
}
```

### Start
Open *index.html* with a local server.
