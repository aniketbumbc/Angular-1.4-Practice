var myApp= angular.module("myApp",[]);

myApp.config(function(){});
myApp.run(function(){});

myApp.controller('MyappController', ['$scope', function($scope){

    $scope.message="Hello All how's you";
    $scope.names=[
        {
            name:'Aniket',
            color:'green'
        },
        {
            name:'Bunny',
            color:'red'
        },
        {
            name:'Don',
            color:'blue'
        },
        {
            name:'Mike',
            color:'orange'
        },
        {
            name:'zeong',
            color:'yellow'
        },
    ];

}]);