angular.module('contacts')
	.component('contactForm', {
		templateUrl: 'src/contactForm.html',
		controller: ['$mdDialog', function($mdDialog) {
			var ctrl = this;
			
			var edit = function(contact) {
				ctrl.editableContact = angular.copy(contact);
			};
			
			this.$onChanges = function() {
				edit(this.contact);
			};
			
			this.save = function() {
				this.onSave({contact: this.editableContact});
				edit(this.editableContact);
			};
			
			this.delete = function() {
				var dialog = $mdDialog.confirm()
					.title('Delete ' + (this.editableContact.name || 'Unnamed'))
					.textContent('Are you sure?')
					.ok('Delete')
					.cancel('Cancel');

				$mdDialog.show(dialog).then(function() {
					ctrl.onDelete({contact: ctrl.editableContact});
				}).catch(function() {
					// no-op
				});
			};
		}],
		bindings: {
			contact: '<',
			onSave: '&',
			onDelete: '&'
		}
	});
