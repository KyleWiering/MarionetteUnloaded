define( ["marionette", "underscore"], function (Marionette, Underscore, App) {
		
	var Footer = Backbone.Marionette.ItemView.extend({
	  template: '<a href="<%= link %> title="" rel="">' 
+ '<span id="button-marionette-unloaded" class="button button-color-<%= color %>" >'
+ '<span><span></span>Marionette Unloaded</span></span></a>',

	  regions: {
	  } 
	  
	  model: Backbone.Model.extend({
		color: 6,
		
	  });
	});
	
	return Footer;
});

/*

BasePage.prototype.getButton = function(name, options, cssClass) {
	if(typeof options === 'undefined' )  {
		options = '';
	}
	
	if(typeof cssClass === 'undefined' ) {
		cssClass = '';
	}	
	
	var optionsString = '';
	for (var i=0; i < options.length; i++) {
		optionsString = optionsString + options[i] + ' ';
	}
	
	var buttonColorClass =  "button-color-6";// + Math.floor((Math.random()*10)); 
	var displayText = name;
	if(name.length > 10 &&name.length <= 23){
		displayText = '<span><span></span>' + name + '</span>';
	} 
	else if  (name.length > 23){
		displayText  = '<span>' + name + '</span>';
	}
	else {
		displayText  = '<span></span><span>' + name + '</span><span></span>';
	}
	
	
	return '<span id="button-'+this.pageName.split(" ").join("-") + '-' + name.split(" ").join("-") +'" class="button '+cssClass+' '+buttonColorClass+'" ' + optionsString + '>'+displayText+'</span>';
};

BasePage.prototype.getLink = function(name, target, options, cssClass) {
	if(typeof options === 'undefined' ) {
		options = '';
	}	
	var title = (typeof options['title'] === 'undefined') ? '' : options['title'];
	var rel = (typeof options['rel'] === 'undefined') ? '' : options['rel'];

	if(typeof cssClass === 'undefined' ) {
		cssClass = '';
	}	
	
	return '<a href="'+target+'" title="'+title+'" rel="'+rel+'">' + this.getButton(name, options, cssClass) + '</a>';
};*/