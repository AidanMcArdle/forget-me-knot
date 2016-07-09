//
//	Author: Aidan McArdle
//	Assignment: WE4 Mobile Web Applications, Digital Skills Academy
//	Date : 2016/07/05
//



//create a module using the Angular objects module() method
var myApp = angular.module("myToDoModule", []);

//create and register our controller with this module
myApp.controller("myToDoController", function($scope){

	//an array[] to hold the tasks. The array is an attribute of $scope to ensure it's accessible from the html
	$scope.tasksArray = [];

	//stores tasks in local storage for saving data between page loads
	var taskData = localStorage['tasksList'];

	//check for existing data, if exists, then parse and load
	if(taskData !== undefined){
		$scope.tasksArray = JSON.parse(taskData);
	};



	//addNewTask function (an attribute of $scope)
	$scope.addNewTask = function(){
		//safety function to check for empty input field
		if($scope.userInputBox != ""){

			//pushes(adds) user input to end of tasksArray[], gives it a default status of undone
			$scope.tasksArray.push({'taskMessage':$scope.userInputBox, 'complete':"undone"});
			//clear out input field afterwards
			$scope.userInputBox="";
		
			//update local storage
			localStorage['tasksList'] = JSON.stringify($scope.tasksArray)
		}
	};



	//function to change status of tasks from undone to done and back
	$scope.markAsComplete = function($index){
		if($scope.tasksArray[$index].complete != "done"){
			$scope.tasksArray[$index].complete = "done" ;
		}else{
			$scope.tasksArray[$index].complete = "undone" ;
		}

		//update local storage
		localStorage['tasksList'] = JSON.stringify($scope.tasksArray)
	};



	//deleteTask function (also an attribute of $scope)
	$scope.deleteTask = function(){
		//splice away the associated task from the tasksArray, find it by index
		$scope.tasksArray.splice(this.$index, 1);
		
		//update local storage
		localStorage['tasksList'] = JSON.stringify($scope.tasksArray)
	};
});
