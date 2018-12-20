var myApp =angular.module('myApp', []);

myApp.controller('AppController', function AppController($scope, $http) {
    $http.get('js/data.json').then(function(response) {
        $scope.movies = response.data;
        $scope.movieOrder = 'name';
    });
});