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

angular.module('destinationApp').factory("DestinationService", function($http, $q) {
    var cachedData = null;

    return {
        getDestinationData: function() {
            if(cachedData) {
                return $q.when(cachedData);
            }
            else {
                return $http.get('/scripts/data.json').then(function(response) {
                    cachedData = response.data;
                    return response.data;
                });
            }
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