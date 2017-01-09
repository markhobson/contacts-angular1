angular.module('contacts', ['ngMaterial', 'ngMessages', 'ngRoute'])
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				template: '<contact-manager></contact-manager>'
			})
			.when('/contact/:contactId', {
				template: function(routeParams) {
					return '<contact-manager contact-id="' + routeParams.contactId + '"></contact-manager>';
				}
			});
	});
