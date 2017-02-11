// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("homeCtrl", function($scope, authService, user, $state) {

  // VARIABLES
  // ============================================================
  $scope.user = user
 $scope.test = "garfield loves home";
  // FUNCTIONS
  // ============================================================
  $scope.logout = function() {
    authService.logout().then(function(response) {
      $state.go('login');
    });
  };

});
