var app = angular.module("MyRoute", ["ngRoute"]);
app.config(["$routeProvider", function($routeProvider){
    
    $routeProvider
    .when("/",{
        
         templateUrl:"/components/home/home.html",
        controller:"homeController"
         
         })
    .when ("/about",{
        templateUrl:"/components/about/about.html",
        controller:"aboutController"
        
    })
    .when ("/whyilove",{
        templateUrl:"/components/whyilove/whyilove.html",
         controller:"whyiloveController"
    })
    
}]);