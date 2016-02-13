angular.module('shoveler.controllers')

.controller('OwnerRegisterCtrl',['$scope','Owner',function($scope, Owner) {
  $scope.owner = {};
  $scope.submitForm = function(form) {
    $scope.owner.address= $scope.owner.street + ", " +
                          $scope.owner.city + ", " +
                          $scope.owner.state;
    $scope.owner.name = $scope.owner.firstName + " " + $scope.owner.lastName;
    Owner.signup($scope.owner);
    console.log($scope.owner);
  };
}]);
