angular.module('contacts', ['ngMaterial'])
	.factory('contactRepository', function() {
		return {
			contacts: [
				{id: '0', name: 'Chip Smith', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'},
				{id: '1', name: 'Randy Horn', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'},
				{id: '2', name: 'Zane High', avatar: 'https://www.gravatar.com/avatar/ed8fc01d29a00912ba41555210cd697e'}
			],
			save: function(contact) {
				this.contacts[contact.id] = contact;
			}
		};
	})
	.component('app', {
		templateUrl: 'src/app.html',
		controller: ['contactRepository', '$mdToast', function(contactRepository, $mdToast) {
			this.contacts = contactRepository.contacts;
			this.select = function(contact) {
				this.selectedContact = contact;
			};
			this.save = function(contact) {
				contactRepository.save(contact);
				this.select(contact);
				$mdToast.showSimple('Contact saved');
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
		controller: function() {
			var ctrl = this;
			var edit = function(contact) {
				ctrl.editableContact = {
					id: contact.id,
					name: contact.name,
					avatar: contact.avatar
				};
			};
			this.$onChanges = function() {
				edit(this.contact);
			};
			this.save = function() {
				this.onSave({contact: this.editableContact});
				edit(this.editableContact);
			};
		},
		bindings: {
			contact: '<',
			onSave: '&'
		}
	});
