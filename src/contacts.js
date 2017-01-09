angular.module('contacts', ['ngMaterial', 'ngMessages', 'ui.router'])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.when('', '/');
		
		$stateProvider
			.state({
				name: 'main',
				url: '/',
				component: 'contactManager'
			})
			.state({
				name: 'contact',
				url: '/contact/:contactId',
				component: 'contactManager',
				resolve: {
					contactId: ['$transition$', function($transition$) {
						return $transition$.params().contactId;
					}]
				}
			});
	}]);
