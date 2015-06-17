this["hbs"] = this["hbs"] || {};
this["hbs"]["example"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<h1>\n  "
    + this.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\n</h1>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["friends"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["main"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n\n  <li data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n    <a href=\"#buddy/"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n    <a href=\"#buddy/"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + alias3(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image","hash":{},"data":data}) : helper)))
    + "\"></a>\n    <a href=\"#\" class=\"likes\">\""
    + alias3(((helper = (helper = helpers.likes || (depth0 != null ? depth0.likes : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"likes","hash":{},"data":data}) : helper)))
    + "\"</a>\n    <a href=\"#\" class=\"dislikes\">\""
    + alias3(((helper = (helper = helpers.dislikes || (depth0 != null ? depth0.dislikes : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"dislikes","hash":{},"data":data}) : helper)))
    + "\"</a>\n  </li>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h1>My Friends</h1>\n\n\n<form id=\"addFriend\">\n  <input type=\"text\" placeholder=\"Name\" id=\"name\">\n  <input type=\"text\" placeholder=\"Likes\" id=\"likes\">\n  <input type=\"text\" placeholder=\"Dislikes\" id=\"dislikes\">\n  <input type=\"text\" placeholder=\"Image URL\" id=\"image\">\n\n<button>Add New Friend</button>\n</form>\n\n\n<ul class=\"friendList\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.friend : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n\n\n";
},"useData":true});