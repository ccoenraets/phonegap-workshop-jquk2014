// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  openFB.init('465374093524857'); // Defaults to sessionStorage for storing the Facebook token


  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.login', {
      url: "/login",
      views: {
          'menuContent' :{
              templateUrl: "templates/login.html",
              controller: "LoginCtrl"
          }
      }
    })

      .state('app.profile', {
          url: "/profile",
          views: {
              'menuContent' :{
                  templateUrl: "templates/profile.html",
                  controller: "ProfileCtrl"
              }
          }
      })

      .state('app.sessions', {
          url: "/sessions",
          views: {
              'menuContent': {
                  templateUrl: "templates/sessions.html",
                  controller: 'SessionsCtrl'
              }
          }
      })

      .state('app.session', {
          url: "/sessions/:sessionId",
          views: {
              'menuContent': {
                  templateUrl: "templates/session.html",
                  controller: 'SessionCtrl'
              }
          }
      });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/sessions');
});

