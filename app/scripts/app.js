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

angular.module('destinationApp').factory("DestinationService", function($q) {
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

    return {
        getDestinationData: function() {
            return $q.when(destinationData);
        }
    }
});

angular.module('destinationApp').controller("DestinationController", function(DestinationService) {
    var self = this;

    activate();

    function activate() {
        DestinationService.getDestinationData().then(function(data) {
            self.destinationData = data;
        });
    }
});

angular.module('destinationApp').controller("DestinationDetailController", function($routeParams, DestinationService) {
    var self = this;

    activate();

    function activate() {
        console.log($routeParams);

        DestinationService.getDestinationData().then(function(data) {
            self.destination = _.findWhere(data, {id: $routeParams.id});
        });

    }
});