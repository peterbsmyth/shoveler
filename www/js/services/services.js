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
]);
