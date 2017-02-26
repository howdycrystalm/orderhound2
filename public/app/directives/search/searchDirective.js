angular.module('app')
.directive('searchDirective', function() {
  return {
    restrict: 'AEC',
    templateUrl: './app/directives/search/searchTmpl.html',
    controller: 'searchCtrl'
  }
})
