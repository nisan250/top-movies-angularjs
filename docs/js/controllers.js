var myControllers = angular.module('myControllers', []);

myControllers.controller('SearchController', function AppController($scope, $http) {
    $http.get('js/data.json').then(function(response) {
        $scope.movies = response.data;
        $scope.movieOrder = 'name';
    });
});

myControllers.controller('DetailsController', function AppController($scope, $http, $routeParams) {
    $http.get('js/data.json').then(function(response) {
        $scope.movies = response.data;
        $scope.thisItem = $routeParams.itemId;

        if($routeParams.itemId > 0) {
            $scope.prevItem = Number($routeParams.itemId) - 1;
        } else {
            $scope.prevItem = $scope.movies.length-1
        }

        if($routeParams.itemId < $scope.movies.length -1) {
            $scope.nextItem = Number($routeParams.itemId) + 1;
        } else {
            $scope.nextItem = 0;
        }
    });
});