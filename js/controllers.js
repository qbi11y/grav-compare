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
    }
}]);

app.controller('ApplicationCtrl', ['$scope', '$state', '$stateParams', 'Applications', function($scope, $state, $stateParams, Applications) {
    $scope.currentStep = 1;
    $scope.application = Applications.getApp($stateParams.id);
    $scope.enviroToDelete = '';
    $scope.showEnviro = function(enviro) {
        Applications.setEnviro(enviro)
        $state.go('environment')
    }
    $scope.createEnvironment = function(enviro) {
        Applications.addEnviro($stateParams.id, enviro);
    }
    $scope.removeEnvironment = function() {
        Applications.removeEnviro($stateParams.id, $scope.enviroToDelete);
    }
    $scope.confirmDelete = function(appID, enviro) {
        $scope.enviroToDelete = enviro;
    }
    $scope.clearEnvironmentDelete = function() {
        $scope.enviroToDelete = '';
    }
}]);

app.controller('EnviroCtrl', ['$scope', '$stateParams', 'Applications', function($scope, $stateParams, Applications) {
    $scope.environment = Applications.getEnviro();
}])