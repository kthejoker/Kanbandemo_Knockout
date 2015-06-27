define(['knockout', 'text!components/task-cards/task-cards.html'], function(ko, htmlString) {

	
	
	return {"viewModel": function(params) {

	var self = this;

	self.selectedFilter = params.selectedFilter;
	self.statusGroup = params.statusGroup;

	self.Tasks = params.TaskList;


	self.FilteredTasks = ko.computed(function() {
		if (!self.selectedFilter()) { return self.Tasks();}
		return ko.utils.arrayFilter(self.Tasks(), function(task) {
                return task()[self.selectedFilter().type] == self.selectedFilter().value;
            });
	});
	
	}, "template": htmlString};
	});