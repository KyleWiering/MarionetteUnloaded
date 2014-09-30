define( ["marionette", "underscore"], function (Marionette, Underscore, App) {
	var Header = Backbone.Marionette.LayoutView.extend({
	  template: '<div><div id="logo" style="float:left;"><img  src="/unloaded/images/logo.png"></div><div style="float:right" id="header-links"><a class="button" href="/unloaded/">home is where the heart lies</a></div><div style="clear:both"></div></div><hr />',

	  regions: {
		logo: '#logo',
		links: '#header-links'
	  }, 	  
	});
	
	return Header;
});