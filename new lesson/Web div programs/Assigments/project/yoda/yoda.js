var app = angular.module("MyApp", []);
app.controller("mainController", function($scope, $http) {    
    $scope.clickon = function () {
      var config = {  
    headers: {
        'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
    }
};   
        $http.get("https://yoda.p.mashape.com/yoda?sentence=" + $scope.text1, config)
            .then(function (response) {    
            $scope.myData = response.data;  
        },function(response){console.log(response);});
    };  
});