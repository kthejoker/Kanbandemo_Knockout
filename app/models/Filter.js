define(["ko"], function(ko) {

return function(Type, Values, Title) {

	var self = this;
	_Title = Title || Type;
	
	self.Title = ko.observable(_Title);
	self.Type = ko.observable(Type);
	self.Values = Values;
	
	

	
};


});