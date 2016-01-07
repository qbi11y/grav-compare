var app = angular.module('AppName', ['ui.router', 'Controllers']);

app.config(function($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('index', {
      url: "/",
      templateUrl: "views/index.html",
      controller: "IndexCtrl"
    })

    .state('application', {
      url: "/application/:id",
      templateUrl: "views/application.html",
      controller: "ApplicationCtrl"
    })

    .state('environment', {
      url: "/environment",
      templateUrl: "views/environment.html",
      controller: "EnviroCtrl"
    })

    .state('report', {
      url: "/report",
      templateUrl: "views/report.html",
      controller: "ReportCtrl"
    })
});



/*app.config(['$stateProvider', function($stateProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/index.html',
            controller: 'IndexController'
        })
        .when('/application', {
            templateUrl: 'views/application.html',
            controller: 'AppController'
        })
}]);*/

