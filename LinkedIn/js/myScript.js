angular.module('myApp',[]).controller('myController',function($scope,$http)
	{
		$http.get('dataCV.json').success(function(response)
		{
			$scope.myData=response;
		});
		
	});