// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('shoveler', ['ionic', 'shoveler.controllers', 'shoveler.services', 'ngMap', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })

  .state('owner_post_job', {
    url: '/owner/postjob',
    templateUrl: 'templates/owner_post_job.html',
    controller: 'OwnerPostJobCtrl'
  })

  .state('owner_register', {
    url: '/signup/owner',
    templateUrl: 'templates/owner_register.html',
    controller: 'OwnerRegisterCtrl'
  })

  .state('shoveler_register', {
    url: '/signup/shoveler',
    templateUrl: 'templates/shoveler_register.html',
    controller: 'ShovelerRegisterCtrl'
  })

  .state('shoveler_map', {
    url: '/shoveler/map',
    templateUrl: 'templates/shoveler_map.html',
    controller: 'ShovelerMapCtrl'
  });

  $urlRouterProvider.otherwise('/home');

})

.constant('API_BASE','http://localhost:3210/api/');
