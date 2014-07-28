
var SomeRegion = Backbone.Marionette.Region.extend({
  el: "#content",

});

Goal = Backbone.Model.extend({
	// Default attributes for Goal
    defaults: {
		name: 'dry Cat', 
		rank: '1', 
		votes: 44
    },
	 // Do HTTP requests on this endpoint
    url: function() {
      return "/";
      //API_URL + "goal" + FORMAT_JSON, 
    }

});

AngryCatView = Backbone.Marionette.ItemView.extend({
  template: "#angry_cat-template",
  tagName: 'tr',
  className: 'angry_cat',
  
  events: {
    'click .rank_up img': 'rankUp',
    'click .rank_down img': 'rankDown',
    'click a.disqualify': 'disqualify'
  },
  
  initialize: function(){
	this.render();
    //this.listenTo(this.model, "change:votes", this.render);
  },
  
  rankUp: function(){
    this.model.addVote();
  },
  
  rankDown: function(){
    this.model.addVote();
  },
  
  disqualify: function(){
    this.model.destroy();
  }
});



$(document).ready(function(){
  var Region = new SomeRegion();
  
  var model = new Goal({id: 123});
	model.fetch({
	  success: function() {
		console.log(model.toJSON());
	  }
	});
	model.set('name', 'super cat');
  
  var cat=  new AngryCatView({model:model});
	Region.show(cat);
});
