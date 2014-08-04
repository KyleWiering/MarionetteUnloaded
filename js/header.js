define( ["marionette", "underscore"], function (Marionette, Underscore, App) {
	var Header = Backbone.Marionette.LayoutView.extend({
	  template: '<div>Header<div>',

	  regions: {
	  } 
	});
	
	return Header;
});