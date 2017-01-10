angular.module('contacts', ['ngMaterial', 'ngMessages', 'ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
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
		
		$urlRouterProvider.otherwise('/');
	}]);
