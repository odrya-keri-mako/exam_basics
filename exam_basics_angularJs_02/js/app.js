;(function(window, angular) {

  'use strict';

  // Lazy load files
  const lazyLoad = (files) => {
    if (!Array.isArray(files)) files = [files];
    const paths = files.map(file => file.includes('/') ?
      file : `./js/controllers/${file}`);
    return ['$ocLazyLoad', ($ocLazyLoad) => $ocLazyLoad.load(paths)];
  };

  // Application module
  angular.module('app', [
    'ui.router',
    'oc.lazyLoad',
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
				templateUrl: './html/pages/home.html',
				controller: 'homeController',
        resolve: { loadRootDeps: lazyLoad('home.controller.js') }
			})
			.state('page1', {
				url: '/page1',
        parent: 'root',
				templateUrl: './html/pages/page1.html',
				controller: 'page1Controller',
        resolve: { loadRootDeps: lazyLoad('page1.controller.js') }
			})
			.state('page2', {
				url: '/page2',
        parent: 'root',
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
    function($rootScope) {
			console.log('Run...');
    }
  ]);

})(window, angular);