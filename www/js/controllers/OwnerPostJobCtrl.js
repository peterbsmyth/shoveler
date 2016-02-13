angular.module('shoveler.controllers')

.controller('OwnerPostJobCtrl',['$scope','Owner','Job',function($scope, Owner, Job) {
  $scope.job = {};

  $scope.submitForm = function() {
    $scope.job.owner = Owner.getId();
    Job.post($scope.job);
  };
}]);
