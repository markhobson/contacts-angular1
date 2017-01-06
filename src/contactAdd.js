angular.module('contacts')
	.component('contactAdd', {
		templateUrl: 'src/contactAdd.html',
		bindings: {
			onAdd: '&'
		}
	});
