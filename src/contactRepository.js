angular.module('contacts')
	.factory('contactRepository', function() {
		var repository = {
			nextId: 0,
			contacts: {},
			add: function(contact) {
				contact.id = this.nextId++;
				this.contacts[contact.id] = contact;
			},
			save: function(contact) {
				this.contacts[contact.id] = contact;
			},
			delete: function(contact) {
				delete this.contacts[contact.id];
			}
		};

		repository.add({name: 'Chip Smith', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'});
		repository.add({name: 'Randy Horn', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'});
		repository.add({name: 'Zane High', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'});

		return repository;
	});
