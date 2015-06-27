define(['knockout', 'text!components/task-card/task-card.html'], function(ko, htmlString) {

	
	
	return {"viewModel": function(params) {

	var self = this;

	self.Task = params.t;

	self.inFilter = ko.observable(true);

	
	}, "template": htmlString};
	});