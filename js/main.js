define( ["marionette", "underscore", "layout/layout", "router"], function (Marionette, Underscore, Layout, Router) {

	// set up the app instance
	App = new Marionette.Application();
	
	App.addRegions({
	  wrapper: "#wrapper"
	});

	
	var RouteHandler = Marionette.AppRouter.extend({
		appRoutes: { 
			"about": "LoadAbout",
			"" : "LoadWebsite"
		},
		controller: App
	});
	
	App.addInitializer(function(options){
	Router();
		new RouteHandler();
		Backbone.history.start({ silent: true });
		App.LoadWebsite();
		
	});
	
	App.LoadAbout = function(){
			
		var view = Marionette.ItemView.extend({
			template: '<div>Hello About</div>'
		});
		
		App.layoutView.content.show(new view())
	};
	
	// Load up the 'outer template' - this is somewhat static nomatter where you navigate.
	App.LoadWebsite = function(){
		
		
		// hook into the program!
		App.layoutView = new Layout();
		App.wrapper.show(App.layoutView);
		
		var view = Marionette.ItemView.extend({
			template: '<div>hello world <a href="other">test</a></div>',
			initialize: function(){
				this.windowWidth = 0;
				$(window).on("resize", this.resizeHandler);
				$(window).on("resize", this.render);       
			},
			resizeHandler: function () {
				this.windowWidth = ($(window).width() - 420 )+ "px" ;
			},
			onClose: function() {
				$(window).off("resize", this.resizeHandler);
				$(window).off("resize", this.render);                
			}
		});
		
		App.layoutView.content.show(new view());
		console.log('starting the application');
		
		var action = window.location.pathname;
		action = action.substring(9); 
		
		if (action !== '/'){
			Backbone.history.loadUrl(action);
		}
	};
	
	// export the app from this module
	return App;
});