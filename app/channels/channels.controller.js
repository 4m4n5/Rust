angular.module('RustApp')
  .controller('ChannelsCtrl', function($state, Auth, Users, profile, channels){
    var channelsCtrl = this;
    Users.setOnline(profile.$id);
    channelsCtrl.profile = profile;
    channelsCtrl.channels = channels;
    channelsCtrl.users = Users.all;
    channelsCtrl.getDisplayName = Users.getDisplayName;
    channelsCtrl.getGravatar = Users.getGravatar;

    channelsCtrl.logout = function(){
      channelsCtrl.profile.online = null;
      channelsCtrl.profile.$save().then(function(){
        Auth.$unauth();
        $state.go('home');
      });
    };

    channelsCtrl.newChannel = {
      name: '',
      safeword: ''
    };

    channelsCtrl.createChannel = function(){
      channelsCtrl.channels.$add(channelsCtrl.newChannel).then(function(){
        channelsCtrl.newChannel = {
          name: '',
          safeword: ''
        };
        $state.go('channels.messages', {channelId: ref.key()});
      });
    };
  });
