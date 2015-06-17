;(function (){


'use strict';


app.Routers.MainRouter = Backone.Router.extend({


  initialize: function(options) {


    var args = options || {};
    this.collection = args.collection;

  },

routes: {

'': 'homeapage',
'friend/:id': 'aboutFriend'

},

homeapage: function(){


  new app.Views.Main({

    collection: this.collection

  });

},

aboutFriend: function(id) {

  new app.Views.About({
    friendID: id,
    collection: this.collection

  });


}



});




}());














