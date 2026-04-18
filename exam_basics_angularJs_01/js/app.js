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