// INITILIZE CONTROLLER
// ============================================================
angular.module('houndApp').controller('adminHomeCtrl', function($scope, mainService, user, $state) {

  // VARIABLES
  // ============================================================
  $scope.user = user;
  $scope.obj = {};//do i need this still????

  // FUNCTIONS
  // ============================================================
  $scope.logout = function() {
    mainService.logout().then(function(response) {
      $state.go('login');
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

  // $scope.getter = function(addUser){
  //   mainService.addUser(addUser).then(function(response) {
  //     //everything that happens AFTER goes here, like clear form, $state.go
  //     if (!response.data) {
  //       alert('Unable to create user');
  //     }
  //     else if (response.data){
  //       alert('User Created!');
  //       $state.reload('adminHome');
  //     }
  //   }).catch(function(err) {
  //     alert('Unable to create user');
  //   });
  // };
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


// angular.module('orderhound')
// .controller('admin-homeCtrl', function ($scope, adminService, user) {
//
//   $scope.name = function(employee_name) {
//     adminService.name(employee_name).then(function (response) {
//     })
//   }
//
//   $scope.addpo = function (ponum) {
//     adminService.addpo(ponum).then(function (response) {
//       //make a confirmation message, like checkin confirmed
//
//     })
//   }
//
//   //*****gives view employee_name, photo, checkpoint_name for the welcome message in home view from databse*****//
//     $scope.welcomeAssets = function() {
//       //call the function that's in service
//       console.log('is this operating?');
//       adminService.welcomeAssets() //now we're calling welcomeAssets in the homeService, from homeCtrl
//       .then(function(response) {
//         console.log('this is our response', response)
//         console.log(response.data[1].employee_name + " HELLLLLLLOOOO");
//         $scope.response = response.data;
//
//       })
//     }
//     $scope.welcomeAssets();
//    });
