var app = angular.module("MyBadges", []);
app.controller("MainController", function ($scope) {
    $scope.person = {};
    $scope.badges = [];
    $scope.alldata = function () {
        $scope.badges.push($scope.person);
        $scope.person = {};
    }});