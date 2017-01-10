angular.module('contacts')
	.component('contactAdd', {
		templateUrl: 'src/contacts/contactAdd.html',
		bindings: {
			onAdd: '&'
		}
	});
