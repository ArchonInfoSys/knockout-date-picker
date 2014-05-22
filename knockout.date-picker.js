(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(["jquery", "knockout", "lodash", "jquery.ui/datepicker"], factory);
	} else {
		// Browser globals
		factory($, ko,_);
	}
}(this, function ($, ko, _) {
	ko.bindingHandlers.datePicker = {
		init: function (element, valueAccessor, allBindingsAccessor) {
			var options = ko.utils.unwrapObservable(valueAccessor()) || {};
			$(element).find('input').first().datepicker(options);
		}
	};
}));