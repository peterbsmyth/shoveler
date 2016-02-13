angular.module('shoveler.controllers')

.controller('OwnerRegisterCtrl',['$scope',function($scope) {
  $scope.owner = {};
  $scope.submitForm = function(form) {
    $scope.owner.address= $scope.owner.street + ", " +
                          $scope.owner.city + ", " +
                          $scope.owner.state;
    $scope.owner.name = $scope.owner.firstName + " " + $scope.owner.lastName;
    console.log($scope.owner);
  };
}]);
