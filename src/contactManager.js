angular.module('contacts')
	.component('contactManager', {
		templateUrl: 'src/contactManager.html',
		controller: ['contactRepository', '$mdToast', '$scope', '$state', function(contactRepository, $mdToast, $scope, $state) {
			var ctrl = this;
			$scope.$watch(contactRepository.getAll, function(newValue) {
				ctrl.contacts = newValue;
			}, true);
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
			this.$onInit = function() {
				var contact = contactRepository.get(this.contactId);
				this.selectedContact = contact;
			};
		}],
		bindings: {
			contactId: '<'
		}
	});
