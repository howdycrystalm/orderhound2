angular.module('app')
.controller('homeCtrl', function ($scope, $state, mainService, homeService, user) {

  $scope.user = user;
  

  $scope.addpo = function (ponum) {
    homeService.addpo(ponum).then(function (response) {
      alert("PO added successfully");
      $state.reload('home');
    })
  };

  $scope.findpo = function (poNumber) {
    homeService.findpo(poNumber).then(function (response) {
      alert("PO found!");
      console.log(response);
      $state.reload('home');
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

  $scope.logout = function() {
    mainService.logout().then(function(response) {
      $state.go('login');
    });
  };

  // $scope.addpo = function (ponum) {
  //   homeService.addpo(ponum).then(function (response) {
  //     alert("PO added successfully");
  //     $state.reload('home');
  //   })
  // };

});
