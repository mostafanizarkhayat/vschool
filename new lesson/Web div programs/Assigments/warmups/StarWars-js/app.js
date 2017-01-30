var app = angular.module("StarwarsApp", []);

app.controller("StarwarsController", function($scope, $http) {
    $http.get("https://swapi.co/api/films/1").then(function(response) {
        $scope.movie = response.data;
    });
});