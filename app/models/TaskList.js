define(["ko"], function(ko) {

return function(Tasks, Filters) {

	var self = this;
	
	self.Tasks = Tasks;
	self.Filters = Filters;
	self.Groupings = ko.observable();

	self.FilteredTasks = ko.computed(function () {
        if (!self.Filters()) { return self.Tasks(); }
        else {
            return ko.utils.arrayFilter(self.Tasks(), function(task) {
                return task[self.Filters().type]() == self.Filters().value;
            });
        }
	});
	
	

	
};


});