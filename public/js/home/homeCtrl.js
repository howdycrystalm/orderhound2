angular.module('houndApp')
  .controller('homeCtrl', function ($scope, $state, mainService, homeService, searchService, user) {

  $scope.user = user;
  $scope.showModal = false;
  $scope.showX = false;


  $scope.addpo = function (ponum) {
    homeService.addpo(ponum).then(function (response) {
      alert("PO added successfully");
      $state.reload('home');
    })
  };

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

/////////////////////////// SEARCH ///////////////////////////
  $scope.findpo = function (poNumber) {
    searchService.findpo(poNumber).then(function (response) {
      alert("PO found!");
      console.log(response);
      $scope.poInfo = response;
      $scope.poNumber = '';
    })
  };

/////////////////////////// ACCORDION ///////////////////////////
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
