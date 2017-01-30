var app = angular.module("MyApp", []);
app.controller("mainController", function ($scope, $http) {    
   
        $http.get("http://mean.codingcamp.us:6543/hitlist.json").then(function (response) {
            console.log(response.data)   ;
            $scope.myData = response.data;  
        });  
  
});