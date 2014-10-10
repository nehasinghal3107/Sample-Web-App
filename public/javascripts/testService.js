angular.module('MyProfileApp')
  .factory('userService', [
  '$rootScope',
  '$resource',
  '$http',
    function ($rootScope, $resource, $http) {
      var UserService = {
          Signup: $resource('/api/signup', {}, { saveUser: { method: 'POST' } })
        };
      var session = {};
      session.signupUser = function (userdata) {
        UserService.Signup.saveUser(userdata, function (success) {
          console.log(success);
          $rootScope.$broadcast('signupDone', success);
        }, function (error) {
          console.log(error);
          $rootScope.$broadcast('signupNotDone', error.status);
        });
      };
      return session;
    }
  ]);