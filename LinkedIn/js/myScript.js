var app = angular.module('myApp', ["xeditable", "firebase"]);
app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

app.controller('myController', function($scope, $firebaseObject, $firebaseArray) {
	var ref= new Firebase("https://cvfirebase--hoaiphu.firebaseio.com/");
  
	var pro=ref.child("PROFILE");
	$scope.profile=$firebaseObject(pro);
	
	var ima=ref.child("IMAGES");
	$scope.images=$firebaseObject(ima);
	
	var sum=ref.child("SUMMARY");
	$scope.summary=$firebaseArray(sum);
	
	var exp=ref.child("EXPERIENCE");
	$scope.experience=$firebaseArray(exp);
	
	var pro=ref.child("PROJECT");
	$scope.project=$firebaseArray(pro);
	
	var ski=ref.child("SKILLS");
	$scope.skills=$firebaseArray(ski);
	
	var edu=ref.child("EDUCATION");
	$scope.education=$firebaseArray(edu);
	
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
		$scope.summary.push({key:$scope.textsummary});
		$scope.textsummary="";s
	};
	$scope.AddExperience=function()
	{
		$scope.hideexperience=false;
		$scope.experience.push({key:$scope.textexperience});
		$scope.textexperience="";
	};
	$scope.AddProject=function()
	{
		$scope.hideproject=false;
		$scope.project.push({key:$scope.textproject});
		$scope.textproject="";
	};
	$scope.AddSkill=function()
	{
		$scope.hideskills=false;
		$scope.skills.push({key:$scope.textskills});
		$scope.textskills="";
	};
	$scope.AddEducation=function()
	{
		$scope.hideeducation=false;
		$scope.education.push({key:$scope.texteducation});
		$scope.texteducation="";
	};
});