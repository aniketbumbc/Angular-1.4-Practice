var myApp= angular.module("myApp",[]);

myApp.config(function(){});
myApp.run(function(){});

myApp.controller('MyappController', ['$scope', function($scope){

    $scope.message="Hello All how's you";
    $scope.removeList=function(name){
        var removeName = $scope.names.indexOf(name);
        $scope.names.splice(removeName,1);
    };
    $scope.names=[
        {
            name:'zAniket',
            color:'yellow',
            rate:23,
            available:true
        },
        {
            name:'Bunny',
            color:'red',
            rate:54,
            available:true
        },
        {
            name:'Don',
            color:'blue',
            rate:10,
            available:false
        },
        {
            name:'Mike',
            color:'orange',
            rate:73,
            available:false
        },
        {
            name:'zeong',
            color:'green',
            rate:80,
            available:true
        },
    ];

}]);