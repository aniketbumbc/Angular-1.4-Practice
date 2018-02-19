var myApp = angular.module("myApp", ['ngRoute']);
myApp.config(['$routeProvider',function($routeProvider){
$routeProvider
.when('/Home',{
    templateUrl:'./views/Home.html'
})
.when('/directory',{
    templateUrl:'./views/directory.html',
    controller:'MyappController'
}).otherwise({
    redirectTo:'/Home'
});
}]);

myApp.config(function () { });
myApp.run(function () { });

myApp.controller('MyappController', ['$scope', function ($scope) {

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

    $scope.names = [
        {
            name: 'zAniket',
            color: 'yellow',
            rate: 23,
            available: true,
            thumb:"./checkimage.png"
        },
        {
            name: 'Bunny',
            color: 'red',
            rate: 54,
            available: true,
            thumb:"./checkimage.png"
        },
        {
            name: 'Don',
            color: 'blue',
            rate: 10,
            available: false,
            thumb:"./checkimage.png"
        },
        {
            name: 'Mike',
            color: 'orange',
            rate: 73,
            available: false,
            thumb:"./checkimage.png"
        },
        {
            name: 'zeong',
            color: 'green',
            rate: 80,
            available: true,
            thumb:"./checkimage.png"
        },
    ];

}]);