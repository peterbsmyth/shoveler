angular.module('shoveler.services')

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
]);
