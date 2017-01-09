angular.module('contacts', ['ngMaterial', 'ngMessages', 'ui.router'])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.when('', '/');
		
		$stateProvider
			.state({
				name: 'main',
				url: '/',
				template: '<contact-manager></contact-manager>'
			})
			.state({
				name: 'contact',
				url: '/contact/:contactId',
				template: function(stateParams) {
					return '<contact-manager contact-id="' + stateParams.contactId + '"></contact-manager>';
				}
			});
	}]);
