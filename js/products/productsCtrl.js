angular.module('myApp').controller('productsCtrl', function($scope, productsSrvc, $stateParams){
    productsSrvc.getProduct($stateParams.id).then(response => {
        return $scope.products = response;
    });
})