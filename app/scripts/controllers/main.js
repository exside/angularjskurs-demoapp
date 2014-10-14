'use strict';

/**
 * @ngdoc function
 * @name angularjskursAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjskursAppApp
 */
angular.module('angularjskursAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
