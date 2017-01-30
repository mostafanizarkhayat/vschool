var app = angular.module("MyApp", []);
app.controller("MainControler", function ($scope) {
            $scope.allitems = [];
            $scope.inputItem = {};
            $scope.AddItem = function () {
                $scope.allitems.push($scope.inputItem);
                $scope.inputItem = {};
            }
});