// angular.module('app')
//     .controller('manageUserCtrl', function($scope, $state, authService) {
//         $scope.obj = {}; //do i need this still????
//
//         $scope.getter = function(addUser) {
//             manageUserService.addUser(addUser).then(function(response) {
//                 //everything that happens AFTER goes here, like clear form, $state.go
//                 if (!response.data) {
//                     alert('Unable to create user');
//                 } else if (response.data) {
//                     alert('User Created!');
//                     $state.reload('manageUser');
//                 }
//             }).catch(function(err) {
//                 alert('Unable to create user');
//             });
//         };
//     });

    angular.module('app')
    .controller('manageUserCtrl', function($scope, $state, authService) {
        $scope.obj = {};//do i need this still????

        $scope.getter = function(addUser){
          authService.addUser(addUser).then(function(response) {
            //everything that happens AFTER goes here, like clear form, $state.go
            if (!response.data) {
              alert('Unable to create user');
            }
            else if (response.data){
              alert('User Created!');
              $state.reload('edit');
            }
          }).catch(function(err) {
            alert('Unable to create user');
          });
        };

    });
