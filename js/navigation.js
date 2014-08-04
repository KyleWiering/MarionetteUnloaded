define( ["marionette", "underscore"], function (Marionette, Underscore, App) {
	var Navigation = Backbone.Marionette.LayoutView.extend({
	  template: '<div><ul><li><a href="">home</a></li><li><a href="about">about</a></li></ul></div>',

	  regions: {
	  } 
	});
	
	return Navigation;
});