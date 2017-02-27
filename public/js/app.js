  angular.module('app', ['ui.router'])
      .config(function($stateProvider, $urlRouterProvider) {
  // INITILIZE STATES
  // ============================================================
  $stateProvider

    // LOGIN STATE
    .state('login', {
      url: '/login',
      templateUrl: './routes/login.html',
      controller: 'loginCtrl'
    })
    //HOME STATE
    .state('home', {
      url: '/home',
      templateUrl: './routes/home.html',
      controller: 'homeCtrl',
      resolve: {
        user: function(mainService, $state) {
          return mainService.getCurrentUser()
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
      templateUrl: './routes/adminHome.html',
      controller: 'adminHomeCtrl',
      resolve: {
        user: function(mainService, $state) {
          return mainService.getCurrentUser()
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
      templateUrl: './routes/manageUser.html',
      controller: 'manageUserCtrl',
      resolve: {
        user: function(mainService, $state) {
          return mainService.getCurrentUser()
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

  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/login');
});
