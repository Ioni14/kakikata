(function() {

var BASE_URL = "/angularApp/";
var TEMPLATE_URL = BASE_URL + "templates/";

var app = angular.module('kakikata_kana', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider',
	function($sP, $uRP) {

	$sP.state('tab-hiraganas', {
		url: '/tab-hiraganas',
		templateUrl: TEMPLATE_URL+"tab-hiraganas.html",
		controller: 'TabHiraganaCtrl',
		resolve: {
		},
	});

	$sP.state('tab-katakanas', {
		url: '/tab-katakanas',
		templateUrl: TEMPLATE_URL+"tab-katakanas.html",
		controller: 'TabKatakanaCtrl',
		resolve: {
		},
	});

	$uRP.otherwise('tab-hiraganas');
}]);

app.controller('TabHiraganaCtrl', ['$scope', function($scope) {

	$scope.test = "Hello World !";

}]);

app.controller('TabKatakanaCtrl', ['$scope', function($scope) {

}]);

})();

