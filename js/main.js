define( ["marionette", "underscore"], function (Marionette, Underscore) {

	// set up the app instance
	var App = new Marionette.Application();

	// configuration, setting up regions, etc ...
	console.log('App was defined, require is probably working.');
	// export the app from this module
	return App;
});