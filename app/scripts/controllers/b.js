angular.module("fApp").controller("b",function($scope,$http){
	$http({
		url:"http://www.somenote.cn:1602/list2",
		method:"GET",

	}).success(function(e){
			//debugger;
		$scope.a2=e[0].content
	})
})