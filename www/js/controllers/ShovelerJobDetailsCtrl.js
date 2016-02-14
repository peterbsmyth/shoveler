angular.module('shoveler.controllers')

.controller('ShovelerJobDetailsCtrl',['$scope','Job','$stateParams',function($scope,Job,$stateParams) {
  Job.getOne($stateParams.jobId).then(function(job){
    console.log(job);
    $scope.job = job;
  });
}]);
