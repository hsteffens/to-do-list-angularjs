import toDoList from './todo-list/todo-list.module'
export default angular
  .module('my-app.features', [
    toDoList
  ])
  .run(function () {
    'ngInject';

    console.log('Features modules loaded.');
  })
  .name;