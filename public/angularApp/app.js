(function() {

var BASE_URL = "/angularApp/";
var TEMPLATE_URL = BASE_URL + "templates/";

var app = angular.module('kakikata', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider',
	function($sP, $uRP) {

	$sP.state('home', {
		url: '/home',
		templateUrl: TEMPLATE_URL+"home.html",
		controller: 'MainCtrl',
		resolve: {
		},
	});

	$uRP.otherwise('home');
}]);

app.controller('MainCtrl', ['$scope', function($scope) {

	$scope.test = "Hello World !";

}]);

})();

