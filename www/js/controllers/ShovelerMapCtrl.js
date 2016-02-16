angular.module('shoveler.controllers')

.controller('ShovelerMapCtrl',['$scope','$location','NgMap','Job','$ionicSlideBoxDelegate','$ionicLoading',
  function($scope,$location,NgMap,Job,$ionicSlideBoxDelegate,$ionicLoading) {

    var map;
    showLoading();
    getJobs()
    .then(getMap);

    $scope.goTo = function(job) {
      $location.url('shoveler/job_details/' + job._id);
    };
    function getJobs() {
      return Job.get().then(function(jobs){
        console.log(jobs);
        $scope.jobs = jobs;
        $ionicSlideBoxDelegate.update();
        return jobs;
      });
    }

    $scope.updateSlide = function(index) {
      console.log(index);
      for (var i = 0; i < $scope.jobs.length; i++) {
        var icon = {
          url: 'img/shoveler_marker@2x.png',
          scaledSize: {width: 20, height: 28}
        };

        if (i === index) {
          icon.url = 'img/shoveler_marker_selected@2x.png';
        }

        $scope.jobs[i].marker.setIcon(icon);
      }
    };

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
          $scope.jobs[i].index = i;
          $scope.jobs[i].marker = new google.maps.Marker({
           position: {
             lat: $scope.jobs[i].owner.coords.lat,
             lng: $scope.jobs[i].owner.coords.lng,
           },
           map: map,
           icon: icon
         });

         addMarkerClick($scope.jobs[i]);
         setShortSize($scope.jobs[i]);


        }
        $scope.j = $scope.jobs[0];
        hideLoading();
      });
    }

    function addMarkerClick(job) {
      job.marker.addListener('click',function() {
        updateSelected(job);
        $ionicSlideBoxDelegate.slide(job.index);
      });
    }

    function setShortSize(job) {
      if (job.size === 'small') {
        job.sizeShort = 'S';
      } else if (job.size === 'medium') {
        job.sizeShort = 'M';
      } else if (job.size === 'large') {
        job.sizeShort = 'L';
      } else {
        job.sizeShort = 'XL';
      }
    }

    function updateSelected(job) {
      $scope.j.marker.setIcon({
        url: 'img/shoveler_marker@2x.png',
        scaledSize: {width: 20, height: 28}
      });
      job.marker.setIcon({
        url: 'img/shoveler_marker_selected@2x.png',
        scaledSize: {width: 20, height: 28}
      });
      $scope.j = job;
    }

    function showLoading() {
      $ionicLoading.show({});
    }

    function hideLoading() {
      $ionicLoading.hide();
    }
  }
]);
