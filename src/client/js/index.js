var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope,$http) {
	$scope.showLogin = true;
});

app.controller("loginCtrl", function($scope,$http) {
	$scope.signup = false;
	$scope.tab = function(tab) {
		$scope.signup = (tab) ?  true : false;
	}
	console.log($scope.showLogin);
});