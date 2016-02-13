angular.module('shoveler.services', [])

.factory('Job',['$http','API_BASE',
  function($http,API_BASE) {
    return {
      post: function(job) {
        $http.post(API_BASE + 'jobs/', job).then(function(response){
          console.log(response);
          // id = response.data.owner._id;
        });
      }
    };
  }
]);
