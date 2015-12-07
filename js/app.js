var app = angular.module('AppName', ['ngRoute', 'Controllers']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/index.html',
            controller: 'IndexController'
        })
        .when('/view1', {
            templateUrl: 'views/view1.html',
            controller: 'ViewController'
        })
}]);

