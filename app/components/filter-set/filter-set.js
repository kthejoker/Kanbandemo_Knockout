define(['knockout', 'text!components/filter-set/filter-set.html'], function(ko, htmlString) {

	
	
	return {"viewModel": function(params) {

	var self = this;

	self.FilterType = params.f1.filterType();
	self.Filters = params.f1.filterValues();
	self.selectedFilter = params.selectedFilter;
	
	self.selectFilter = function(data) {
		self.selectedFilter({type: self.FilterType, value: data});
	};

	
	}, "template": htmlString};
	});