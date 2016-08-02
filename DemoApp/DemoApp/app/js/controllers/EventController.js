'use strict';
var ea = angular.module("eventsApp");
ea.controller("EventController",
  function EventController($scope, eventData, $routeParams, $route) {
    $scope.sortorder = "name";
    $scope.events = eventData.getEvent($routeParams.eventId);
    // .$promise.then(
    //   function(event) {
    //     $scope.events = event;
    //     console.log(event);
    //   })
    // .catch(function(response) {
    //   console.log(response);
    // });

    $scope.upVoteSession = function(session) {
      session.upVoteCount++
    };
    $scope.downVoteSession = function(session) {
      session.downVoteCount--
    };
    $scope.reload = function() {
      $route.reload();
    };
    // $scope.scrollToSession = function() {
    //   $anchorScroll();
    // }
  });
