  angular.module('houndApp', ['ui.router'])
      .config(function($stateProvider, $urlRouterProvider) {
  // INITILIZE STATES
  // ============================================================
  $urlRouterProvider.otherwise('/');
  $stateProvider
    // LOGIN STATE
    .state('login', {
      url: '/',
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
                return $state.go('/');
              }
              return response.data
            }).catch(function(err) {
              $state.go('/');
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
                return $state.go('/');
              }
              return response.data
            }).catch(function(err) {
              $state.go('/');
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
                return $state.go('/');
              }
              return response.data
            }).catch(function(err) {
              $state.go('/');
            });
        }
      }
    })

  // ASSIGN OTHERWISE
  // ============================================================

});
