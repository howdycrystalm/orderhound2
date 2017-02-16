angular.module('app').controller('searchCtrl', function($scope, mainService, purchaseOrders) {

$scope.purchaseOrders = purchaseOrders;
console.log(purchaseOrders);



});
