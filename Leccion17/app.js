/**
 * 
 */

angular.module("CustomDirective",[])

.controller("AppCtrl", function($scope,$http){
	$http.get("https://api.github.com/users/sergiofmc/repos")
	.success(function(data){
		$scope.repos = data;
	})
	.error(funcion(err){
		console.log(err);
	});
}9;