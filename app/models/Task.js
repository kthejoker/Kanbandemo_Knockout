define(["ko"], function(ko) {

return function(task) {

	var self = this;
	
	self.Title = ko.observable(task.Title);
	self.AssignedTo = ko.observable(task.AssignedTo);
	self.Status = ko.observable(task.Status);
	self.Deadline = ko.observable(task.Deadline);
	self.Project = ko.observable(task.Project);
	self.Stream = ko.observable(task.Stream);
	
	

	
};


});