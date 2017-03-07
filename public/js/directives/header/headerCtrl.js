angular.module('houndApp')
  .controller('headerCtrl', function($scope, searchService, user) {
    $scope.user = user;
})
