angular.module('app')
.directive('searchDirective', function() {
  return {
    restrict: 'AEC',
    templateUrl: './routes/directives/searchTmpl.html',
    controller: 'searchCtrl'
  }
})
