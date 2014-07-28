requirejs.config({
    baseUrl: 'js',	
	paths : {
	app: '../app',
	backbone : 'backbone.marionette/backbone',
	underscore : 'backbone.marionette/underscore',
	jquery : 'backbone.marionette/jquery',
	marionette : 'backbone.marionette/backbone.marionette',
	'backbone.wreqr' : 'backbone.marionette/backbone.wreqr',
	'backbone.eventbinder' : 'backbone.marionette/backbone.eventbinder',
	'backbone.babysitter' : 'backbone.marionette/backbone.babysitter'
  },
  shim : {
    jquery : {
      exports : 'jQuery'
    },
    underscore : {
      exports : '_'
    },
    backbone : {
      deps : ['jquery', 'underscore'],
      exports : 'Backbone'
    }
  }
	
});

//requirejs(['main']);

$(document).ready(function(){
	require(["main"],function(main){
		main.start();
	});
});
// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.


// Start loading the main app file. Put all of
// your application logic in there.
