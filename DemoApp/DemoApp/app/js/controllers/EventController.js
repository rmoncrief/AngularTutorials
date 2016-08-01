'use strict';
var ea = angular.module("eventsApp");
ea.controller("EventController",
  function EventController($scope, eventData) {

   eventData.getEvent(function(event) {
     $scope.events = event; 
   });
   $scope.sortorder = "name";

   $scope.upVoteSession = function(session) { session.upVoteCount++};
   $scope.downVoteSession = function(session) { session.downVoteCount--};
});
