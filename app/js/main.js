;(function (){


'use strict';


var myFriends = new app.Collections.Friends();

myFriends.fetch().done( function(){


  new app.Routers.MainRouter({

    collection: myFriends

  });

  Backbone.history.start();

});




}());
