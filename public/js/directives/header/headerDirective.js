angular.module('houndApp')
.directive('headerDirective', function() {
  return {
    restrict: 'AEC',
    // templateUrl: './routes/headerTmpl.html',
    templateUrl: '../../../routes/headerTmpl.html',
    controller: 'headerCtrl'
  }
})
