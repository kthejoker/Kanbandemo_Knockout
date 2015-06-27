// to depend on a bower installed component:
// define(['component/componentName/file'])

define(["jquery", "knockout", "domReady"], function($, ko, domReady) {
	
	 ko.components.register('task-card', { require: 'components/task-card/task-card' });
	 ko.components.register('task-cards', { require: 'components/task-cards/task-cards' });
	 ko.components.register('filter-set', { require: 'components/filter-set/filter-set' });
//  	 ko.components.register('task-card', {"viewModel": {require : 'components/task-card/task-card-raw' }	, "template": {require: "text!components/task-card/task-card.html"}});
	
var vm = function() {
	var self = this;


	self.t = ko.observable({ Title: "View task component on Page",
	AssignedTo: "Cynthia Kinkeade",
	Status: "UAT",
	Project: "Team Kanban",
	Stream: "Internal Projects"
	});

	self.t1 = ko.observable({ Title: "Filter task components on page",
	AssignedTo: "Kyle Hale",
	Status: "Working",
	Project: "Team Kanban",
	Stream: "Internal Projects"
	});

	self.t2 = ko.observableArray([self.t, self.t1]);

	self.Queue = ko.computed(function() {
return ko.utils.arrayFilter(self.t2(), function(task) {
                return task().Status == "Queue";
            });

	});

	self.Working = ko.computed(function() {
return ko.utils.arrayFilter(self.t2(), function(task) {
                return task().Status == "Working";
            });

	});

	self.UAT = ko.computed(function() {
return ko.utils.arrayFilter(self.t2(), function(task) {
                return task().Status == "UAT";
            });

	});

		self.Done = ko.computed(function() {
return ko.utils.arrayFilter(self.t2(), function(task) {
                return task().Status == "Done";
            });

	});

    self.Filter = function(Title, Values) {

    					var self = this;

    					self.filterType = ko.observable(Title);
    					self.filterValues = ko.observableArray(Values);

    			};

    			f2 = new Filter("AssignedTo", ["Kyle Hale", "Cynthia Kinkeade"]);
    			//f1 = new Filter("Stream", ["Internal Projects"]);

	self.selectedFilter = ko.observable();
}
	
domReady( 
   function () {
  ko.applyBindings(vm); }
  );
});
