export function CardController($scope) {
  'ngInject';

  $scope.canFinishItem = function (item){
    return item.id && item.status === 0;
  }

  $scope.canAddItem = function (item){
    return !item.id;
  }

}