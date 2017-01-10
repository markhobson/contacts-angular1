angular.module('contacts')
	.component('contactListItem', {
		templateUrl: 'src/contacts/contactListItem.html',
		bindings: {
			contact: '<',
			selected: '<',
			onSelect: '&'
		}
	});
