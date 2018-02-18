var myApp= angular.module("myApp",[]);

myApp.config(function(){});
myApp.run(function(){});

myApp.controller('MyappController',function($scope){

    $scope.message="Hello All how's you";
    $scope.names=['aniket','yahoo','Mind','Yom','Tom'];

});