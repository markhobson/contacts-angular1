angular.module('contacts')
	.component('contactListItem', {
		templateUrl: 'src/contactListItem.html',
		bindings: {
			contact: '<',
			selected: '<',
			onSelect: '&'
		}
	});
