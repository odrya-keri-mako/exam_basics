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