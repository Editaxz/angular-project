var app = angular.module("todoApp")
.service('dataService', function($http) {
  this.helloConsole = function() {
    console.log("This is a hello console service");
  }
this.getTodos = function(callback){
  $http.get('js/mock/todos.json').then(callback)
}

//this.getTodos = $http.get('js/mock/todos.json')
//.then(function (response){
//console.log(response.data);
//return reponse.data;
this.deletedTodo = function(todo){
  console.log("Se eliminó   la tarea" + todo.name);
}
this.saveTodo = function(){
  console.log("Se guardó la tarea" + todo.name);
}

});
