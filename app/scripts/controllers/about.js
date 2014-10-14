'use strict';

/**
 * @ngdoc function
 * @name angularjskursAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularjskursAppApp
 */
angular.module('angularjskursAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
