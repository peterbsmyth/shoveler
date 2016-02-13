angular.module('shoveler.controllers')

.controller('ShovelerMapCtrl',['$scope','NgMap','Job',function($scope,NgMap,Job) {

  var map;
  // console.log(jobs);

  getJobs()
  .then(getMap);


  function getJobs() {
    return Job.get();
  }

  function getMap(jobs) {
    return NgMap.getMap().then(function(theMap){
      map = theMap;
      for (var i = 0; i < jobs.length; i++) {

        var marker = new google.maps.Marker({
         position: {
           lat: jobs[i].owner.coords.lat,
           lng: jobs[i].owner.coords.lng
         },
         map: map
       });
      }
    });
  }
}]);
