angular.module('RustApp')
  .controller('ChannelsCtrl', function($state, Auth, Users, profile, channels){
    var channelsCtrl = this;
    channelsCtrl.profile = profile;
    channelsCtrl.channels = channels;
    channelsCtrl.getDisplayName = Users.getDisplayName;
    channels.getGravatar = Users.getGravatar;

    channels.logout = function(){
      Auth.$unauth();
      $state.go('home');
    };
  });
