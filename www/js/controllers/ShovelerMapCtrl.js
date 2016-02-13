angular.module('shoveler.controllers')

.controller('ShovelerMapCtrl',['$scope','NgMap','Job','$ionicSlideBoxDelegate',
  function($scope,NgMap,Job,$ionicSlideBoxDelegate) {

    var map;

    getJobs()
    .then(getMap);


    function getJobs() {
      return Job.get().then(function(jobs){
        console.log(jobs);
        $scope.jobs = jobs;
        $ionicSlideBoxDelegate.update();
        return jobs;
      });
    }

    function getMap() {
      return NgMap.getMap().then(function(theMap){
        map = theMap;
        for (var i = 0; i < $scope.jobs.length; i++) {
          var icon = {
            url: 'img/shoveler_marker@2x.png',
            scaledSize: {width: 20, height: 28}
          };

          if (i === 0) {
            icon.url = 'img/shoveler_marker_selected@2x.png';
          }

          $scope.jobs[i].marker = new google.maps.Marker({
           position: {
             lat: $scope.jobs[i].owner.coords.lat,
             lng: $scope.jobs[i].owner.coords.lng,
           },
           map: map,
           icon: icon
         });
        }
      });
    }
  }
]);
