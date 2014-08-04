//define( ["marionette", "underscore", "header", "navigation", "advertisement", "footer"], function (Marionette, Underscore, Header, Navigation, Advertisement, App) {
define( ["marionette", "underscore", "header", "navigation", "advertisement", "footer"], function (Marionette, Underscore, Header, Navigation, Advertisement, Footer, App) {
	var Layout = Backbone.Marionette.LayoutView.extend({
		template: '#wrapper',

		regions: {
			header: "#header",					// layout view
			navigation: "#navigation",			// collection view
			advertisement: "#advertisement",	// collection view
			content: "#content",				// hmm.
			footer: "#footer"					// item view.
		}, 
		onShow: function(){
			this.header.show(new Header());
			this.navigation.show(new Navigation());
			this.advertisement.show(new Advertisement());
			this.footer.show(new Footer());
			
		}
	});

	return Layout;
});