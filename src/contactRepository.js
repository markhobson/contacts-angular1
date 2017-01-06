angular.module('contacts')
	.factory('contactRepository', function() {
		return {
			contacts: {
				'0': {id: '0', name: 'Chip Smith', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'},
				'1': {id: '1', name: 'Randy Horn', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'},
				'2': {id: '2', name: 'Zane High', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'}
			},
			save: function(contact) {
				this.contacts[contact.id] = contact;
			},
			delete: function(contact) {
				delete this.contacts[contact.id];
			}
		};
	});
