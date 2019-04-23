import { toDoList } from './todo-list.directive';
import { ToDoListController } from './todo-list.controller';

export default angular
  .module('my-app.components.toDoList', [])
  .directive('toDoList', toDoList)
  .controller('toDoListController', ToDoListController)
  .name;