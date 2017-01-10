angular.module('contacts', ['ngMaterial', 'ngMessages', 'ui.router'])
	.config(['$urlRouterProvider', function($urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
	}]);
