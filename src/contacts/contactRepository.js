angular.module('contacts')
	.factory('contactRepository', function() {
		var nextId = 0;
		var contacts = {};
		var repository = {
			get: function(id) {
				return contacts[id];
			},
			getAll: function() {
				return Object.values(contacts);
			},
			add: function(contact) {
				contact.id = nextId++;
				contacts[contact.id] = contact;
			},
			save: function(contact) {
				contacts[contact.id] = contact;
			},
			delete: function(contact) {
				delete contacts[contact.id];
			}
		};

		repository.add({
			name: 'Chip Smith',
			avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e',
			email: 'chip@smith.com'
		});
		repository.add({
			name: 'Randy Horn',
			avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e',
			email: 'randy@horn.com'
		});
		repository.add({
			name: 'Zane High',
			avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e',
			email: 'zane@high.com'
		});

		return repository;
	});
