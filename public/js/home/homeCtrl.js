angular.module('houndApp')
  .controller('homeCtrl', function ($scope, $state, mainService, homeService, searchService, user) {

  $scope.user = user;
  $scope.showModal = false;
  $scope.showX = false; /* need? */


  $scope.addpo = function (ponum) {
    homeService.addpo(ponum).then(function (response) {
      // alert("PO added successfully");
      swal({
        title: "PO added successfully!",
        type: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#1EB11E"
      });
      $state.reload('home');
    })
  };

  // $scope.login = function(user) {
  //   mainService.login(user)
  //   .then(function(response) {
  //     if (!response.data) {
  //       $scope.user.password = "";
  //       // return alert('user could not be logged in');
  //       return swal("Bad job!", "cant login!", "error");
  //     }
  //     else if (response.data.admin === 'true') {
  //       $state.go('adminHome')
  //     }
  //     else {
  //       $state.go('home')
  //     }
  //     console.log(response.data.admin);
  //   }).catch(function(err) {
  //     $scope.user.password = "";
  //     // alert('user could not be logged in');
  //     swal("Bad job!", "cant login!", "error");
  //   });
  // };

  $scope.logout = function() {
    mainService.logout().then(function(response) {
      $state.go('login');
    });
  };

//********************************** SEARCH **********************************//
  $scope.findpo = function (poNumber) {
    searchService.findpo(poNumber).then(function (response) {
      // alert("PO found!");
      console.log(response);
      $scope.poInfo = response;
      $scope.poNumber = '';
    })
  };

//********************************** ACCORDIAN **********************************//
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  }

});
