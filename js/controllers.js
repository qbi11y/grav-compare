var app = angular.module('Controllers', ['Data']);
console.log('controller.js');

app.controller('StateController',['$scope', 'Data', function($scope, Data) {
    console.log('Hello');
    Data.setData(Date());
    console.log(Data.getData());
}]);