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