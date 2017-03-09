angular.module('houndApp')
  .controller('headerCtrl', function($scope, $state, mainService, user) {
    $scope.user = user;
});

