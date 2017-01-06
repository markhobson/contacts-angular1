angular.module('contacts')
	.component('contactManager', {
		templateUrl: 'src/contactManager.html',
		controller: ['contactRepository', '$mdDialog', '$mdToast', function(contactRepository, $mdDialog, $mdToast) {
			this.contacts = contactRepository.contacts;
			this.select = function(contact) {
				this.selectedContact = contact;
			};
			this.add = function() {
				var contact = {};
				contactRepository.add(contact);
				this.select(contact);
			};
			this.save = function(contact) {
				contactRepository.save(contact);
				this.select(contact);
				$mdToast.showSimple((contact.name || 'Unnamed') + ' saved');
			};
			this.delete = function(contact) {
				var ctrl = this;
				var dialog = $mdDialog.confirm()
					.title('Delete ' + (contact.name || 'Unnamed'))
					.textContent('Are you sure?')
					.ok('Delete')
					.cancel('Cancel');
				
				$mdDialog.show(dialog).then(function() {
					contactRepository.delete(contact);
					ctrl.select();
					$mdToast.showSimple((contact.name || 'Unnamed') + ' deleted');
				}).catch(function() {
					// no-op
				});
			};
		}]
	});
