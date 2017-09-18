var app = angular.module("todoApp")
.directive('todos', function(){
return {
    templateUrl: 'templates/todo.html',
    controller: "mainCtrl"

}
})