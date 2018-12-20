var myControllers = angular.module('myControllers', []);

myControllers.controller('SearchController', function AppController($scope, $http) {
    $http.get('js/data.json').then(function(response) {
        $scope.movies = response.data;
        $scope.movieOrder = 'name';
    });
});