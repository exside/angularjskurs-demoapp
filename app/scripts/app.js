'use strict';

angular.module('destinationApp', ['ngRoute']).config(function($routeProvider) {
    $routeProvider
        .when('/destination', {
            templateUrl: 'templates/destination.html',
            controller: 'DestinationController',
            controllerAs: 'ctrl'
        })
        .when('/destination/:id', {
            templateUrl: 'templates/destinationdetail.html',
            controller: 'DestinationDetailController',
            controllerAs: 'ctrl'
        });
});

angular.module('destinationApp').controller("DestinationController", function() {
    var self = this;

    activate();

    function activate() {
        var destinationData = [{
            id: "1",
            name: "Paris",
            description: "Ein wunderschöner Ort an der Seine",
            price: 695
        }, {
            name: "Interlaken",
            id: "2",
            description: "Die Adventure-Hauptstadt im Oberland",
            price: 899
        }];

        self.destinationData = destinationData;
    }
});

angular.module('destinationApp').controller("DestinationDetailController", function($routeParams) {
    var self = this;

    activate();

    function activate() {
        console.log($routeParams);
        var destinationData = [{
            id: "1",
            name: "Paris",
            description: "Ein wunderschöner Ort an der Seine",
            price: 695
        }, {
            name: "Interlaken",
            id: "2",
            description: "Die Adventure-Hauptstadt im Oberland",
            price: 899
        }];

        self.destination = _.findWhere(destinationData, {id: $routeParams.id});
    }
});