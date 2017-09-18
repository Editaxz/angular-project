var app = angular.module("todoApp")
.controller('mainCtrl', function($scope,dataService) {

  //$scope.helloConsole= dataService.helloConsole;
  dataService.getTodos(function(response){
    console.log(response.data);
    $scope.todos = response.data;

  })

  $scope.helloworld = function() {
    console.log("Hola a todos");
  }

 $scope.todos = dataService.getTodos;

 $scope.saveTodo = function(todo){
   todo.saved=true;
   todo.saved=false;

  dataService.saveTodo(todo);
 }
$scope.deletedTodo = function(todo, index){
  $scope.todos.splice(index, 1);
  dataService.deletedTodo(todo);
 }
 
});
