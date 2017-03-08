angular.module('houndApp')
.directive('headerDirective', function() {
  return {
    restrict: 'AEC',
    templateUrl: './routes/directives/headerTmpl.html',
    // controller: 'headerCtrl'
  }
})
