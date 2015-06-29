'use strict';

angular.module('mutrack')
  .controller('MainCtrl', function ($scope, localStorageService) {
    // Local storage of public packages.
    var packagesInStore = localStorageService.get('packages');

    $scope.packages = packagesInStore || [];

    $scope.$watch('packages', function() {
      localStorageService.set('packages', $scope.packages);
    }, true);
});
