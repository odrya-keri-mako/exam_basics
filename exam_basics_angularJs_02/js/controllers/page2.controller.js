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