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
	
	$scope.AddSummary=function()
	{
		$scope.hidesummary=false;
		$scope.myData.SUMMARY.push({key:$scope.summary});
		$scope.summary="";
	};
	$scope.AddExperience=function()
	{
		$scope.hideexperience=false;
		$scope.myData.EXPERIENCE.push({key:$scope.experience});
		$scope.experience="";
	};
	$scope.AddProject=function()
	{
		$scope.hideproject=false;
		$scope.myData.PROJECT.push({key:$scope.project});
		$scope.project="";
	};
	$scope.AddSkill=function()
	{
		$scope.hideskills=false;
		$scope.myData.SKILLS.push({key:$scope.skills});
		$scope.skills="";
	};
	$scope.AddEducation=function()
	{
		$scope.hideeducation=false;
		$scope.myData.EDUCATION.push({key:$scope.education});
		$scope.education="";
	};
});