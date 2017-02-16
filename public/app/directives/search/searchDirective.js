angular.module('app')
.directive('searchDirective', function() {
  return {
    restrict: 'AE',
    templateUrl: './app/directives/search/searchTmpl.html',
    controller: 'searchCtrl'
  }
})
