angular.module('shoveler.controllers')

.controller('OwnerJobDetailsCtrl',['$scope','Job','Shoveler','$stateParams',function($scope,Job,Shoveler,$stateParams) {
  Job.getOne($stateParams.jobId).then(function(job){
    $scope.job = job;
    console.log(job);
  });
  var shovelerId = {};
  $scope.submitForm = function() {
    Job.getOne($stateParams.jobId).
    then(function(job) {
      $scope.job = job;
    });
  };
}]);
