angular.module('houndApp')
.controller('manageUserCtrl', function($scope, $state, mainService, user) {
    $scope.user = user;
    $scope.obj = {};//do i need this still????

    $scope.getter = function(addUser){
      mainService.addUser(addUser).then(function(response) {
        //everything that happens AFTER goes here, like clear form, $state.go
        if (!response.data) {
          // alert('Unable to create user');
          swal({
            title: "Unable to Create User",
            text: "User may already exist.",
            type: "error",
            confirmButtonText: "OK",
            confirmButtonColor: "#153975"
          });
        }
        else if (response.data){
          // alert('User Created!');
          swal({
            title: "User Created!",
            type: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#153975"
          });
          $state.reload('manageUser');
        }
      }).catch(function(err) {
        // alert('Unable to create user');
        swal({
          title: "Unable to Create User",
          text: "User may already exist.",
          type: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#153975"
        });
      });
    };

    $scope.logout = function() {
      mainService.logout().then(function(response) {
        $state.go('login');
      });
    };
});
