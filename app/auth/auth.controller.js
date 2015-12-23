angular.module('RustApp')
  .controller('AuthCtrl', function(Auth, $state){
    var authCtrl = this;

    // The user object to be used with ng-model directive in the form
    authCtrl.user = {
      email: '',
      password: ''
    };

    authCtrl.login = function(){
      Auth.$authWithPassword(authCtrl.user).then(function(auth){
        $state.go('home');
      }, function(error){
        authCtrl.error = error;
      });
    };

    authCtrl.register = function (){
      Auth.$createUser(authCtrl.user).then(function (user){
        authCtrl.login();
      }, function (error){
        authCtrl.error = error;
      });
    };
    
  });
