var myApp =angular.module('myApp', []);

myApp.controller('AppController', function AppController($scope) {
    $scope.movie = {
        "name": "bohemian rhapsody",
        "imagename": "test",
        "genre": "Drama",
        "director": "Bryan Singer",
        "description  ": "Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury, who defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film traces the meteoric rise of the band through their iconic songs and revolutionary sound, their near-implosion as Mercury's lifestyle spirals out of control, and their triumphant reunion on the eve of Live Aid, where Mercury, facing a life-threatening illness, leads the band in one of the greatest performances in the history of rock music. In the process, cementing the legacy of "         
    };
});