;(function (){

'use strict';

app.Collections.Friends = Backbone.Collection.extend({



  model: app.Models.Friends,

  comparator: '',

  url: app.rootURL



});






















}());
