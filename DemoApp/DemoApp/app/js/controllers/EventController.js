'use strict';
var ea = angular.module("eventsApp");
ea.controller("EventController",
  function EventController($scope, eventData) {

   $scope.events = eventData.event;
  //  $scope.snippet = '<span style="color:red">Hi There</span>';
  //  $scope.boolvalue = true;
   $scope.sortorder = "name";

   $scope.upVoteSession = function(session) { session.upVoteCount++};
   $scope.downVoteSession = function(session) { session.downVoteCount--};
});
