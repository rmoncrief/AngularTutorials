'use strict'
var eec = angular.module("eventsApp");
eec.controller("EditEventController",
  function EditEventController($scope) {
    $scope.saveEvent = function(events, newEventForm) {
      console.log(newEventForm);
      if(newEventForm.$valid) {
      window.alert('event ' + events.name + ' saved!');
    }
    };
  $scope.cancelEvent = function() {
    window.location = "/EventDetails.html"
  };
});
