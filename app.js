var myApp= angular.module("myApp",[]);

myApp.config(function(){});
myApp.run(function(){});

myApp.controller('MyappController', ['$scope', function($scope){

    $scope.message="Hello All how's you";
    $scope.names=[
        {
            name:'Aniket',
            color:'green',
            rate:23
        },
        {
            name:'Bunny',
            color:'red',
            rate:54,
        },
        {
            name:'Don',
            color:'blue',
            rate:10
        },
        {
            name:'Mike',
            color:'orange',
            rate:73
        },
        {
            name:'zeong',
            color:'yellow',
            rate:80
        },
    ];

}]);