var app = angular.module('Controllers', ['Data']);

app.controller('IndexController',['$scope', 'Data', function($scope, Data) {
    Data.setData(Date());
    console.log(Data.getData());
}]);

app.controller('ViewController', function() {
    console.log('View Controller Working');
})