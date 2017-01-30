var app = angular.module("myBounty", []);
app.service("BountyServices", function ($http) {
            var self = this;
            self.bountyData;
            this.getAllBounty = function () {
                return $http.get("http://localhost:8000/api/bounty").then(function (response) {
                    self.bountyData = response.data;
                    return response;
                });
            }
            this.newBounty = function (newData) {
                console.log(newData);
                return $http.post("http://localhost:8000/api/bounty", newData).then(function (response) {
                    self.bountyData = response.data;
                    return response;
                });
            }
            this.updateBounty = function (updateData) {
                console.log(updateData._id);
                return $http.put("http://localhost:8000/api/bounty/" + updateData._id, updateData).then(function(response){
                    self.bountyData= response.data;
                    return response;
        
                });
            }
            
            
            
            
            
            
            app.controller("MainController", function ($scope) {
            $scope.person = {};
            $scope.badges = [];
            $scope.alldata = function () {
                $scope.badges.push($scope.person);
                $scope.person = {};
            }
        });