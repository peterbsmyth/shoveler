angular.module('shoveler.controllers')

.controller('OwnerPostJobCtrl',['$scope','Owner','Job',function($scope, Owner, Job) {
  $scope.job = {};

  $scope.submitForm = function() {
    $scope.job.owner_id = Owner.getId();
    console.log($scope.job);
    Job.post($scope.job);
  };
}]);
