'use strict';
eventsApp.directive('eventThumbnail', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/directives/eventThumbnails.html'
  }
});
