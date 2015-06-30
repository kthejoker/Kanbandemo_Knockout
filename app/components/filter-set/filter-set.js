define(['knockout', 'text!components/filter-set/filter-set.html'], function(ko, htmlString) {

	
	
	return {"viewModel": function(params) {

	var self = this;

	self.Filter = params.f1;
	self.selectedFilter = params.selectedFilter;

	self.clearFilter = function() {
		self.selectedFilter(null)	;
	};
	
	self.selectFilter = function(data) {
		self.selectedFilter({type: self.Filter.Type(), value: data});
	};

	
	}, "template": htmlString};
	});