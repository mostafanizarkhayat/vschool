var app = angular.module("MyApp", []);
app.controller("MainController", function ($scope) {
    $scope.ugly = [];
    $scope.thing = {};
    $scope.addUglyness = function () {
        $scope.ugly.push($scope.thing);
        $scope.thing = {};
    }
})