'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', 
      {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
}]);

app.controller('MainCtrl', ['$scope', function ($scope){
    $scope.button="test"
    $scope.foo = "test";
    $scope.selectedIndex = 1;
}]);

app.directive('header', function () {
    return {
        restrict: 'A', 
        replace: true,
        templateUrl: "/views/header.html",
        controller: function($scope, $element){
          $scope.list = [
            {'text': 'About', 'url': '/about', 'index': 1},
            {'text': 'Gallery', 'index': 2, 'submenu': 
                [
                    {'text': 'Necklaces', 'url': '/gallery/necklaces'},
                    {'text': 'Rings', 'url': '/gallery/rings'},
                    {'text': 'Earrings', 'url': '/gallery/earrings'},
                ]},
            {'text': 'Custom Designs', 'url': '/custom', 'index': 3},
            {'text': 'Gemstones', 'url': '/gemstones', 'index': 4},
            {'text': 'Techniques', 'url': '/techniques', 'index': 5},
            {'text': 'Contact', 'url': '/contact', 'index': 6},
        ]
        },

    };
});

app.directive('footer', function () {
    return {
        restrict: 'A', 
        replace: true,
        templateUrl: "/views/footer.html",
    }
});
