angular.module('contacts')
	.component('contactManager', {
		templateUrl: 'src/contactManager.html',
		controller: ['contactRepository', '$mdToast', function(contactRepository, $mdToast) {
			this.contacts = contactRepository.contacts;
			this.select = function(contact) {
				this.selectedContact = contact;
			};
			this.save = function(contact) {
				contactRepository.save(contact);
				this.select(contact);
				$mdToast.showSimple(contact.name + ' saved');
			}
			this.delete = function(contact) {
				contactRepository.delete(contact);
				this.select();
				$mdToast.showSimple(contact.name + ' deleted');
			}
		}]
	});
