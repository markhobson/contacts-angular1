angular.module('contacts')
	.component('contactManager', {
		templateUrl: 'src/contactManager.html',
		controller: ['contactRepository', '$mdToast', '$scope', '$state', function(contactRepository, $mdToast, $scope, $state) {
			this.$onInit = function() {
				var ctrl = this;
				$scope.$watch(contactRepository.getAll, function(newValue) {
					ctrl.contacts = newValue;
				}, true);
				var contact = contactRepository.get(this.contactId);
				this.selectedContact = contact;
			};
			this.select = function(contact) {
				$state.go('contact', {contactId: contact.id});
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
				contactRepository.delete(contact);
				this.select();
				$mdToast.showSimple((contact.name || 'Unnamed') + ' deleted');
			};
		}],
		bindings: {
			contactId: '<'
		}
	});
