var app = angular.module('myApp', ["xeditable"]);
app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

app.controller('myController', function($scope, $http) {
  $http.get('data.json')
  .success(function(response) {
      $scope.myData = response;
  });
  $scope.CancelFormSummary=function()
	{
		$scope.hidesummary=false;
	};
	$scope.CancelFormExperience=function()
	{
		$scope.hideexperience=false;
	};
	$scope.CancelFormProject=function()
	{
		$scope.hideproject=false;
	};
	$scope.CancelFormSkill=function()
	{
		$scope.hideskills=false;
	};
	$scope.CancelFormEducation=function()
	{
		$scope.hideeducation=false;
	};
});