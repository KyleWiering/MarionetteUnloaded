define( ["marionette", "underscore"], function (Marionette, Underscore, App) {
	var Advertisement = Backbone.Marionette.LayoutView.extend({
	  template: '<div>Advertisement<div>',

	  regions: {
	  } 
	});
	
	return Advertisement;
});