// INITILIZE CONTROLLER
// ============================================================
// angular.module('houndApp').controller('loginCtrl', function($scope, mainService, $state) {
angular.module('houndApp').controller('loginCtrl', function($scope, mainService, $state) {

  // VARIABLES
  // ============================================================
  $scope.test= "login";

  // FUNCTIONS
  // ============================================================
  $scope.login = function(user) {
    mainService.login(user)
    .then(function(response) {
      if (!response.data) {
        $scope.user.password = "";
        return alert('user could not be logged in');
      }
      else if (response.data.admin === 'true') {
        $state.go('adminHome')
      }
      else {
        $state.go('home')
      }
      console.log(response.data.admin);
    }).catch(function(err) {
      $scope.user.password = "";
      alert('user could not be logged in');
    });
  };

  $scope.register = function(newUser) {
    mainService.register(newUser)
    .then(function(response) {
      if (response.data !== "User created successfully!") {
        return alert("Could not register user");
      }
      alert(response.data);
    }).catch(function(err) {
      return alert("Could not register user");
    });
  };
});
