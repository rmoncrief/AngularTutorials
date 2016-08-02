'use strict'

eventsApp.controller('EventListController',
  function EventListController($scope, $location, eventData) {
    debugger;
    $scope.events = eventData.getAllEvents();
  });
