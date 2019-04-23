export function toDoList(){
  let directive = {
    restrict: 'E',
    templateUrl: 'features/todo-list/todo-list.html',
    transclude: true,
    scope: {
    },
    controller: 'toDoListController'
  };

  return directive;
}