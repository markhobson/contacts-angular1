angular.module('contacts', ['ngMaterial'])
	.factory('contactRepository', function() {
		return {
			contacts: [
				{name: 'Chip Smith', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'},
				{name: 'Randy Horn', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'},
				{name: 'Zane High', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'}
			]
		};
	})
	.component('app', {
		templateUrl: 'src/app.html',
		controller: ['contactRepository', function(contactRepository) {
			this.contacts = contactRepository.contacts;
			this.select = function(contact) {
				this.selectedContact = contact;
			}
		}]
	})
	.component('contactList', {
		templateUrl: 'src/contactList.html',
		bindings: {
			contacts: '<',
			selectedContact: '<',
			onSelect: '&'
		}
	})
	.component('contactListItem', {
		templateUrl: 'src/contactListItem.html',
		bindings: {
			contact: '<',
			selected: '<',
			onSelect: '&'
		}
	})
	.component('contactForm', {
		templateUrl: 'src/contactForm.html',
		bindings: {
			contact: '<'
		}
	});
