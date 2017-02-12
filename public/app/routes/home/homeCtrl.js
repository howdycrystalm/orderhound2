angular.module('app')
.controller('homeCtrl', function ($scope, $state, authService, homeService, user) {

  $scope.user = user;

  $scope.addpo = function (ponum) {
    homeService.addpo(ponum).then(function (response) {
      alert("PO added successfully");
    })
  };
//****************attempting to make find button *********************//
// $scope.findpo = function (findNum) {
//   homeService.findpo(findNum).then(function (response) {
//     //make a confirmation message, like checkin confirmed
//
//   })
// };

$scope.logout = function() {
  authService.logout().then(function(response) {
    $state.go('login');
  });
};

//*****gives view employee_name, photo, checkpoint_name for the welcome message in home view from databse*****//
  // $scope.welcomeAssets = function() {
  //   //call the function that's in service
  //   console.log('is this operating?');
  //   homeService.welcomeAssets() //now we're calling welcomeAssets in the homeService, from homeCtrl
  //   .then(function(response) {
  //     console.log('this is our response', response)
  //     $scope.response = response;
  //
  //   })
  // }
  // $scope.welcomeAssets();
 });
