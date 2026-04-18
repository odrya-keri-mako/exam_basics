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