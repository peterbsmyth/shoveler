angular.module('shoveler.controllers')

.controller('ShovelerJobDetailsCtrl',['$scope','Job','Shoveler','$stateParams',function($scope,Job,Shoveler,$stateParams) {
  Job.getOne($stateParams.jobId).then(function(job){
    $scope.job = job;
    console.log(job);
  });
  var shovelerId = {};
  shovelerId.shovelerId = Shoveler.getId();
  $scope.submitForm = function() {
    Job.accept($scope.job._id ,shovelerId).
    then(function(response) {
      if (response.status === 201) {
        $scope.accepted = true;
      }
    });
  };
}]);
