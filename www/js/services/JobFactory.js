angular.module('shoveler.services', [])

.factory('Job',['$http','$q','API_BASE',
  function($http,$q,API_BASE) {

    function getAddress(job) {
      var deferred = $q.defer();

      var address = job.owner.address;
      address = address.replace(' ', '+');

      $http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=AIzaSyBIhTS7pKHU2XdIINTUPNaWsv6WOC53lSU')
      .then(function(response){
        job.owner.coords = response.data.results[0].geometry.location;
        deferred.resolve(job);
      });

      return deferred.promise;
    }

    return {
      post: function(job) {
        $http.post(API_BASE + 'jobs/', job).then(function(response){
          console.log(response);
        });
      },
      get: function() {
        return $http.get(API_BASE + 'jobs/').then(function(response){
          var promises = [];
          for (var i = 0; i < response.data.length; i++) {
            var job = response.data[i];
            promises.push(getAddress(job));
          }

          return $q.all(promises);
        });
      }
    };
  }
]);
