var app = angular.module('AppName',['Controllers', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/",
      templateUrl: "views/state1.html",
      controller: 'StateController'
    });
});

