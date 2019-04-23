export function GridController($scope) {
  'ngInject';

  $scope.setDoingItems = function (items) {
    $scope.doingItems = items.filter(function(item){
      return item.status === 0;
    });
  }

  $scope.setDoneItems = function (items) {
    $scope.doneItems = items.filter(function(item){
      return item.status === 1;
    });
  }

  $scope.addItem = function (item) {
    item.id = $scope.items.length;
    _loadItems();
  }

  function _addDefaultItem(){
    let defaultItem = {
      id: 0,
      title: "",
      description: "",
      status: 0
    };
    $scope.items.splice(0, 0, defaultItem);
  }

  function _loadItems(){
    _addDefaultItem();
    $scope.setDoingItems($scope.items);
    $scope.setDoneItems($scope.items);
  }

  function _init() {
    _loadItems();
  }

  _init();

}