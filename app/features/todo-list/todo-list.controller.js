export function ToDoListController($scope) {
  'ngInject';
  $scope.title="To-Do List";
  $scope.headers = ['Doing', 'Done'];

  $scope.items = [];

  $scope.onClickDone = function (item){
    let position = $scope.items.map(e => e.id).indexOf(item.id);
    $scope.items[position].status = 1;
  }

  $scope.onClickRemove = function (item){
    let position = $scope.items.map(e => e.id).indexOf(item.id);
    $scope.items.splice(position, 1);
  }

}