angular.module('houndApp')
  .controller('searchCtrl', function($scope, searchService) {
      $scope.findpo = function (poNumber) {
        searchService.findpo(poNumber).then(function (response) {
          alert("PO found!");
          console.log(response);
          $scope.poInfo = response;
          $scope.poNumber = '';
        })
      };
  })
