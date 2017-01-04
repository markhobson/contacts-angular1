angular.module('contacts', ['ngMaterial'])
	.component('app', {
		templateUrl: 'src/app.html',
		controller: function() {
			this.contacts = [
				{name: 'Chip Smith', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'},
				{name: 'Randy Horn', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'},
				{name: 'Zane High', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'}
			];
			this.yo = function(contact) {
				console.log('yo ' + contact.name);
			}
		}
	})
	.component('contactList', {
		templateUrl: 'src/contactList.html',
		bindings: {
			contacts: '<',
			onSelect: '&'
		}
	})
	.component('contactListItem', {
		templateUrl: 'src/contactListItem.html',
		bindings: {
			contact: '<',
			onSelect: '&'
		}
	});
