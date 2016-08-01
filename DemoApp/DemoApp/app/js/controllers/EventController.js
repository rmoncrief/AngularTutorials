'use strict';
var ea = angular.module("eventsApp");
ea.controller("EventController",
  function EventController($scope, eventData, $anchorScroll) {
    $scope.sortorder = "name";
    eventData.getEvent()
      .$promise.then(
        function(event) {
          $scope.events = event;
          console.log(event);
        })
      .catch(function(response) {
        console.log(response);
      });



    $scope.upVoteSession = function(session) {
      session.upVoteCount++
    };
    $scope.downVoteSession = function(session) {
      session.downVoteCount--
    };
    $scope.scrollToSession = function() {
      $anchorScroll();
    }
  });
