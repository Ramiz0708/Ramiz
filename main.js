$(function(){
		var object = {};
		_.extend(object, Backbone.Events);
		
		object.on("alert", function(msg){
			aletr("Triggered" + msg);
			});
		object.trigger("alert", "an event");
	});