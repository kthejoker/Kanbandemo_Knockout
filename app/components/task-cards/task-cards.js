define(['knockout', 'text!components/task-cards/task-cards-sort.html'], function(ko, htmlString) {

	
	
	return {"viewModel": function(params) {

	var self = this;

	self.Tasks = params.TaskList.FilteredTasks;
	
	}, "template": htmlString};
	});