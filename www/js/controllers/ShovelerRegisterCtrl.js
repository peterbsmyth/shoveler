angular.module('shoveler.controllers')

.controller('ShovelerRegisterCtrl',['$scope','Shoveler',function($scope,Shoveler) {
  $scope.shoveler = {};
  $scope.submitForm = function() {
    $scope.shoveler.name = $scope.shoveler.firstName + " " + $scope.shoveler.lastName;
    Shoveler.signup($scope.shoveler);
    console.log($scope.shoveler);
  };

}]);
