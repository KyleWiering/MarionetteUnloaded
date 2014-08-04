define( ["marionette", "underscore", "layout"], function (Marionette, Underscore, Layout) {

	// set up the app instance
	App = new Marionette.Application();
	
	App.addRegions({
	  wrapper: "#wrapper"
	});

	
	var Router = Marionette.AppRouter.extend({
		appRoutes: { 
			"about": "LoadAbout",
			"" : "LoadWebsite"
		},
		controller: App
	});
	
	
	
	App.addInitializer(function(options){
		new Router();
		Backbone.history.start({ silent: true });
		App.LoadWebsite();
		
	});
	
	App.LoadAbout = function(){
			
		var view = Marionette.ItemView.extend({
			template: '<div>Hello About</div>'
		});
		
		App.layoutView.content.show(new view())
		
		console.log("\n\n saying HIII\n\n");
	};
	
	// Load up the 'outer template' - this is somewhat static nomatter where you navigate.
	App.LoadWebsite = function(){
		
		
		// hook into the program!
		App.layoutView = new Layout();
		App.wrapper.show(App.layoutView);
		
		var view = Marionette.ItemView.extend({
			template: '<div>hello world <a href="other">test</a></div>'
		});
		
		App.layoutView.content.show(new view())
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