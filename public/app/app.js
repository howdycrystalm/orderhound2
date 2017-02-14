  angular.module('app', ['ui.router'])
      .config(function($stateProvider, $urlRouterProvider) {
  // INITILIZE STATES
  // ============================================================
  $stateProvider

    // LOGIN STATE
    .state('login', {
      url: '/login',
      templateUrl: './app/routes/login/login.html',
      controller: 'loginCtrl'
    })
    //HOME STATE
    .state('home', {
      url: '/home',
      templateUrl: './app/routes/home/home.html',
      controller: 'homeCtrl',
      resolve: {
        user: function(authService, $state) {
          return authService.getCurrentUser()
            .then(function(response) {
              if (!response.data.email) {
                return $state.go('login');
              }
              return response.data
            }).catch(function(err) {
              $state.go('login');
            });
        }
      }
    })
    //ADMIN STATE
    .state('adminHome', {
      url: '/adminHome',
      templateUrl: './app/routes/adminHome/adminHome.html',
      controller: 'adminHomeCtrl',
      resolve: {
        user: function(authService, $state) {
          return authService.getCurrentUser()
            .then(function(response) {
              if (!response.data.email) {
                return $state.go('login');
              }
              return response.data
            }).catch(function(err) {
              $state.go('login');
            });
        }
      }
    })
    //MANAGE
    .state('manageUser', {
      url: '/manageUser',
      templateUrl: './app/routes/manage/manageUser.html',
      controller: 'manageUserCtrl',
      resolve: {
        user: function(authService, $state) {
          return authService.getCurrentUser()
            .then(function(response) {
              if (!response.data.email) {
                return $state.go('login');
              }
              return response.data
            }).catch(function(err) {
              $state.go('login');
            });
        }
      }
    })
    //EDIT
    .state('edit', {
        url: '/edit',
        controller: 'editCtrl',
        templateUrl: 'app/states/edit/edit.html',
        resolve: {
            checkpoints: function(editService) {
              return editService.checkpoints();
            },
            user: function(authService, $state) {
                return authService.getCurrentUser()
                    .then(function(response) {
                        if (!response.data)
                            $state.go('login');
                        return response.data;
                    })
                    .catch(function(err) {
                        $state.go('login');
                    })
            }
        }
    })


  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/login');
});
