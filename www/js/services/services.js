angular.module('shoveler.services', [])

.factory('Owner',['$http','API_BASE',
  function($http,API_BASE) {
    var id = '';
    return {
      signup: function(owner) {
        $http.post(API_BASE + 'signup/owner', owner).then(function(response){
          console.log(response);
          id = response.data.owner._id;
        });
      },
      getId: function() {
        return id;
      }
    };
  }
])

.factory('Shoveler',['$http','API_BASE',
  function($http,API_BASE) {
    var id = '';
    return {
      signup: function(shoveler) {
        $http.post(API_BASE + 'signup/shoveler', shoveler).then(function(response){
          console.log(response);
          id = response.data.shoveler._id;
        });
      },
      getId: function() {
        return id;
      }
    };
  }
])

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
