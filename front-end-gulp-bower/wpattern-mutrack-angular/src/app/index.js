'use strict';

var BASE_URL = 'http://localhost:8080/service';

angular.module('mutrack', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize',
 'ngResource', 'ui.router', 'ui.bootstrap', 'LocalStorageModule', 'ngNotify',
 'uiSwitch'])
  .constant('REST_URL', {
    'ROOT':BASE_URL,
    'PUBLIC_PATH':BASE_URL + '/public',
    'PRIVATE_PATH':BASE_URL + '/private'
  })
  // Define the service of local storage.
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  // Define values of the user.
  .value('userDetails', {
    authorities: [],
    token: ''
  })
  // Define routes.
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('config', {
        url: '/config',
        templateUrl: 'app/config/config.html',
        controller: 'ConfigCtrl'
      })
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('package', {
        url: '/package',
        templateUrl: 'app/package/package.html',
        controller: 'PackageCtrl'
      })
      .state('user', {
        url: '/user',
        templateUrl: 'app/user/user.html',
        controller: 'UserCtrl'
      });

    $urlRouterProvider.otherwise('/');
  });
