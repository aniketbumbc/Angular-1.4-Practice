var myApp = angular.module("myApp", ['ngRoute']);
myApp.config(['$routeProvider',function($routeProvider){
$routeProvider
.when('/Home',{templateUrl:'./views/Home.html'})
.when('/Directory',{templateUrl:'./views/Directory.html',controller:"MyappController"})
.when('/Contact',{templateUrl:'./views/Contact.html'})
.otherwise({redirectTo:'/Home'});
}]);
myApp.controller('MyappController', ['$scope','$http',function ($scope,$http) {
    $scope.message = "Hello All how's you";
    $scope.removeList = function (name) {
        var removeName = $scope.names.indexOf(name);
        $scope.names.splice(removeName, 1);
    };
    $scope.addName = function () {
        $scope.names.push({
            name: $scope.newname.name,
            color: $scope.newcolor.color,
            rate: parseInt($scope.newrate.rate),
            available: true
        });
        $scope.newname.name="";
        $scope.newcolor.color="";
        $scope.newrate.rate="";
    };
    $http.get('./views/data/names.json').then(function(response){
        $scope.names = response.data;
  });
  
}]);