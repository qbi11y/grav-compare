var app = angular.module('Controllers', ['Data']);

app.controller('IndexCtrl',['$scope', 'Applications', function($scope, Applications) {
    $scope.currentStep = 1;
    $scope.application = {};
    $scope.applications = Applications.getApps();
    $scope.createApplication = function(app) {
        $scope.currentStep = 1;
        app.id = Math.floor(Math.random() * 100);
        Applications.addApp(app);
        $scope.applications = Applications.getApps();
        console.log($scope.applications)
    }
    console.log('index');
}]);

app.controller('ApplicationCtrl', ['$scope', '$state', '$stateParams', 'Applications', function($scope, $state, $stateParams, Applications) {
    console.log(Applications.getApp($stateParams.id));
    $scope.currentStep = 1;
    $scope.application = Applications.getApp($stateParams.id);
    $scope.showEnviro = function(enviro) {
        console.log(enviro)
        Applications.setEnviro(enviro)
        $state.go('environment')
    }
}]);

app.controller('EnviroCtrl', ['$scope', '$stateParams', 'Applications', function($scope, $stateParams, Applications) {
    console.log(Applications.getEnviro())
}])