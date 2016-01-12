'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('UserCtrl', function ($scope) {
    $scope.todos = [];
  });
