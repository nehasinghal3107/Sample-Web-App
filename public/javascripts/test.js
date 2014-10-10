var app = angular.module("MyProfileApp", ['ngResource']);


app.controller("PostsCtrl", [ '$scope', 'userService', '$http', function($scope, userService, $http) {

	console.log('initiallizing...');

	$(document).on('click', 'a.navlink', function (e) {
  var element = document.getElementById(this.id);
  e.preventDefault();
  $(element).tab('show');
              
});

  $scope.form = {};
   
  $scope.user = {};
  $scope.userdata = {};

   
  // function to send and stringify user registration data to Rest APIs
  $scope.jsonUserData = function(){
    var userData = 
    {
      user:
        {
          'fname' : $scope.user.fname,
          'lname' : $scope.user.lname,
          'emailid' : $scope.user.emailid
        }  
    };
    return JSON.stringify(userData); 
  } 

    // function to handle server side responses
    $scope.handleSignupResponse = function(data){
      if (data.success) {
				console.log(data);
      } else {
        console.log(data);
      }
    };
  
    $scope.signup = function(){
      if ($scope.form.userform.$valid) {
        console.log('User Data entered successfully');
        userService.signupUser($scope.jsonUserData());
      } else {
        console.log('enter valid data')
      }
    }

    var cleanupEventSignupDone = $scope.$on("signupDone", function(event, message){
      console.log(message);
      $scope.handleSignupResponse(message);      
    });

    var cleanupEventSignupNotDone = $scope.$on("signupNotDone", function(event, message){
      console.log(message);
    });

    $scope.$on('$destroy', function(event, message) {
      cleanupEventSignupDone();
      cleanupEventSignupNotDone();
    });

}]);