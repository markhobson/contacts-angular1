angular.module('contacts')
	.component('contactManager', {
		templateUrl: 'src/contacts/contactManager.html',
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
			
			this.unselect = function() {
				$state.go('contacts');
			};
			
			this.add = function() {
				var contact = {};
				contactRepository.add(contact);
				this.select(contact);
			};
			
			this.save = function(contact) {
				contactRepository.save(contact);
				this.selectedContact = contact;
				$mdToast.showSimple((contact.name || 'Unnamed') + ' saved');
			};
			
			this.delete = function(contact) {
				contactRepository.delete(contact);
				this.unselect();
				$mdToast.showSimple((contact.name || 'Unnamed') + ' deleted');
			};
		}],
		bindings: {
			contactId: '<'
		}
	})
	.config(['$stateProvider', function($stateProvider) {
		$stateProvider
			.state({
				name: 'contacts',
				url: '/',
				component: 'contactManager'
			})
			.state({
				name: 'contact',
				url: '/contact/:contactId',
				component: 'contactManager',
				resolve: {
					contactId: ['$stateParams', function($stateParams) {
						return $stateParams.contactId;
					}]
				}
			});
	}]);
