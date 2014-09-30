define( ["marionette", "underscore"], function (Marionette, Underscore, App) {
	var Footer = Backbone.Marionette.LayoutView.extend({
	  template: '<div><hr class="lifted-corners" />Marionette Unloaded is a project of <a href="http://waryway.com">Waryway</a><div>',

	  regions: {
	  } 
	});
	
	return Footer;
});