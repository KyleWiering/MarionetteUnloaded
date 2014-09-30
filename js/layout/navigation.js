define( ["marionette", "underscore"], function (Marionette, Underscore, App) {
	var Navigation = Backbone.Marionette.LayoutView.extend({
	  template: '<div><a href="/unloaded/">Go Home</a><a href="/unloaded/about">about</a></div>',

	  regions: {
	  } 
	});
	
	return Navigation;
});