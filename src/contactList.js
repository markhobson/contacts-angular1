angular.module('contacts')
	.component('contactList', {
		templateUrl: 'src/contactList.html',
		bindings: {
			contacts: '<',
			selectedContact: '<',
			onSelect: '&'
		}
	});
