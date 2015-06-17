;(function(){

'use strict';

app.Views.About = Backbone.View.extend({

  className: 'friend',

  events: {

    'click #remove': 'unFriend'

  },

  template: hbs.friends,


  initialize: function(options){

    var args = options || {};
    this.friendID = args.friendID;
    this.collection = args.collection;
    this.render();
    $('.container').html(this.el);

  },

  render: function(){

    var aboutFriend = this.collection.get(this.friendID);

    this.$el.html(this.template(aboutFriend.toJSON()));
  },

  unFriend: function(event){

    var x = event.target;
    var y = $(x).data('id');
    var z = this.collection.get(y);

    z.destroy().success( function (){
      $('.container').html('Gone. Forever.');

    });

  }

});

}());












