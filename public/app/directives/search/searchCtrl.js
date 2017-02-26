// angular.module('app')
//   .controller('searchCtrl', function ($scope, $state, searchService) {
//
//   $scope.findpo = function (poNumber) {
//     homeService.findpo(poNumber).then(function (response) {
//       alert("PO found!");
//       console.log(response);
//       $scope.poInfo = response;
//       $scope.poNumber = '';
//     })
//   };
//
//
// });
angular.module('app')
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
