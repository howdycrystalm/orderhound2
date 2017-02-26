// INITILIZE SERVICE
// ============================================================
angular.module('app')
.service('searchService', function ($http) {

// CRUD FUNCTIONS
// ============================================================
  this.findpo = function (poNumber) {
   return $http ({
     method: 'GET',
     url: '/api/getPo/' + poNumber
    }).then(function (response) { //this will pretty much be the same for all of my service functions
     return response.data;
    });
  };


});
