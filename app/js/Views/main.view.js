;(function () {

'use strict';

app.Views.Main = Backbone.View.extend({


  className: 'main',

  events{
    'submit #addFriend' : 'addFriend'
  },


    template: hbs.main




initialize: function (options) {

  var args = options || {};
  this.collection = args.collection;

  this.render();
  $(.'container').html(this.el);

},




render: function (){

  this.$el.html(this.template({friend: this.collection.toJSON() }));

},

addFriend: function(event){

  event.preventDefault();

  var self = this,

  form = $(event.target),

  name = form.find("#name").val(),
  likes = form.find("#likes").val(),
  dislikes = form.find("#dislikes").val(),
  image = form.find("#image").val();


  var bud = new app.Models.Friend({

    name: name,
    likes: likes,
    dislikes: dislikes,
    image: image

  });


this.collection.add(bud).save().success( function () {

      self.render();
    });

    }

  });


}());









