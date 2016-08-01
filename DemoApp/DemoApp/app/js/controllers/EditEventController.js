'use strict'
var eec = angular.module("eventsApp");
eec.controller("EditEventController",
  function EditEventController($scope, eventData) {

    $scope.saveEvent = function(event, newEventForm) {
      console.log(newEventForm);
      if(newEventForm.$valid) {
        eventData.save(event)
          .$promise.then(
              function(response) {console.log('success', response)},
              function(response) {console.log('failure', response)}
          );
        }
    };

  $scope.cancelEvent = function() {
    window.location = "/EventDetails.html"
  };
});
