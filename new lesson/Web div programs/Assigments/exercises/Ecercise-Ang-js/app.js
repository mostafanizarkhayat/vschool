var app = angular.module("MyBadge", []);
app.controller("BadgeController", Function($scope) {
    $scope.badgeList = [];
    $scope.theBadge = {};
    $scope.addBadge = function () {
        $scope.badgeList.push($scope.theBadge);
    }
});