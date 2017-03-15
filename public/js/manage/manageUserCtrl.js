angular.module('houndApp')
.controller('manageUserCtrl', function($scope, $state, mainService, user) {
    $scope.user = user;
    $scope.obj = {};//do i need this still????

    $scope.getter = function(addUser){
      mainService.addUser(addUser).then(function(response) {
        //everything that happens AFTER goes here, like clear form, $state.go
        if (!response.data) {
          alert('Unable to create user');
        }
        else if (response.data){
          alert('User Created!');
          $state.reload('manageUser');
        }
      }).catch(function(err) {
        alert('Unable to create user');
      });
    };

    $scope.logout = function() {
      mainService.logout().then(function(response) {
        $state.go('login');
      });
    };
});
