define( ["marionette", "underscore", "Main"], function (Marionette, Underscore, Main) {

	// set up the app instance
	var About = function(){
		Main.LoadAbout = function(){
			
		var view = Marionette.ItemView.extend({
			template: '<div>Hello About</div>'
		});
		
		App.layoutView.content.show(new view())
	};
		
	// export the app from this module
	
	}
	return About;
});