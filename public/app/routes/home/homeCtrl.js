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
$scope.login = function(user) {
  authService.login(user)
  .then(function(response) {
    if (!response.data) {
      $scope.user.password = "";
      return alert('user could not be logged in');
    }
    // else if (esponse.data.company) {
    //   $scope.user.company = "";
    //   return alert('This company is already registered.');
    // }
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
