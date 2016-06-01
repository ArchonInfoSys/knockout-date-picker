(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(["jquery", "knockout", "jquery.ui/datepicker"], factory);
	} else {
		// Browser globals
		factory($, ko);
	}
}(this, function ($, ko) {
	ko.bindingHandlers.datePicker = {
		init: function (element, valueAccessor, allBindingsAccessor) {
			var options = ko.utils.unwrapObservable(valueAccessor()) || {};

			var valueBinding = allBindingsAccessor.get("value");
 			$(element).datepicker(Object.assign({}, options, {
				onSelect: function() {
					if (valueBinding) {
 						valueBinding(element.value);
 					}
				}
 			}));
		}
	};
}));
