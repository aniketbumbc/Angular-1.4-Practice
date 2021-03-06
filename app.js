var myApp = angular.module("myApp", ['ngRoute','ngAnimate']);
myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/Home', { templateUrl: './views/Home.html', controller: "MyappController" })
        .when('/Directory', { templateUrl: './views/Directory.html', controller: "MyappController" })
        .when('/Contact', { templateUrl: './views/Contact.html', controller: "ContactController" })
        .when('/Contact-success', { templateUrl: './views/Contact-success.html', controller: "ContactController" })
        .otherwise({ redirectTo: '/Home' });
}]);
myApp.directive('randomNinja', [function () {
    return {
        restrict: 'E',
        scope: {
            names: '=',
            title: '='
        },
        templateUrl: "./views/random.html",
        transclude:true,
        controller: function ($scope) {
            $scope.random = Math.floor(Math.random() * 4);
        }
    };
}]);
myApp.controller('MyappController', ['$scope', '$http', function ($scope, $http) {
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
        $scope.newname.name = "";
        $scope.newcolor.color = "";
        $scope.newrate.rate = "";
    };
    $scope.removeAll=function(){

        $scope.names=[];

    };
    $http.get('./views/data/names.json').then(function (response) {
        $scope.names = response.data;
    });

}]);

myApp.controller('ContactController' ,[ '$scope', '$location', function ($scope,$location){
   
    $scope.sendFeedback = function () {
        $location.path('/Contact-success');
    }

}]);