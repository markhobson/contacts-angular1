angular.module('contacts')
	.component('contactForm', {
		templateUrl: 'src/contactForm.html',
		controller: function() {
			var ctrl = this;
			var edit = function(contact) {
				ctrl.editableContact = {
					id: contact.id,
					name: contact.name,
					avatar: contact.avatar,
					email: contact.email
				};
			};
			this.$onChanges = function() {
				edit(this.contact);
			};
			this.save = function() {
				this.onSave({contact: this.editableContact});
				edit(this.editableContact);
			};
			this.delete = function() {
				this.onDelete({contact: this.editableContact});
			};
		},
		bindings: {
			contact: '<',
			onSave: '&',
			onDelete: '&'
		}
	});
