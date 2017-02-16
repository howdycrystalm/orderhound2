angular.module('app').controller('searchCtrl', function($scope, mainService, $state) {
  // $scope.logout = function() {
  //   authService.logout().then(function(response) {
  //     $state.go('login');
  $scope.po_search = function(purchaseOrders) {
    mainService.po_search(po)//might need to change po to purchaseOrders
    .then(function(response) {
      if(!response.data) {
        $scope.po.num = "";
        return alert('PO does not exist');
      }
      else {
        $state.go('location')
      }
    })
  }



});
