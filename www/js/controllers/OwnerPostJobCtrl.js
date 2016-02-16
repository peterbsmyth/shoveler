angular.module('shoveler.controllers')

.controller('OwnerPostJobCtrl',['$scope','$location','$stateParams','Owner','Job',function($scope, $location, $stateParams, Owner, Job) {
  $scope.job = {};
  var jobId;
  $scope.submitForm = function() {
    $scope.job.owner = Owner.getId();
    Job.post($scope.job).then(function(response){
      jobId = response.data.job._id;
      $location.url('owner/job_details/' + jobId);
    });
  };
}]);
