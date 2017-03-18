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
        // return alert('user could not be logged in');
        return swal({
          title: "You shall not pass!",
          text: "Incorrect email or password",
          type: "error",
          confirmButtonText: "Try Again!",
          confirmButtonColor: "#153975"
        });
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
      // alert('user could not be logged in');
      swal({
        title: "You shall not pass!",
        text: "Incorrect email or password",
        type: "error",
        confirmButtonText: "Try Again!",
        confirmButtonColor: "#153975"
      });
    });
  };

  $scope.register = function(newUser) {
    mainService.register(newUser)
    .then(function(response) {
      if (response.data !== "User created successfully!") {
        return swal({
          title: "Can't Register Admin",
          text: "Admin or business is already registered.",
          type: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#153975"
        });
      }
      alert(response.data);
    }).catch(function(err) {
      return swal({
        title: "Can't Register Admin",
        text: "Admin or business is already registered.",
        type: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#153975"
      });
    });
  };
});
