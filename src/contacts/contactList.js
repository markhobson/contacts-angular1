angular.module('contacts')
	.component('contactList', {
		templateUrl: 'src/contacts/contactList.html',
		bindings: {
			contacts: '<',
			selectedContact: '<',
			onSelect: '&'
		}
	});
