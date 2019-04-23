import '../../scss/app/grid.scss'

export function grid(){
  let directive = {
    restrict: 'E',
    templateUrl: 'components/grid/grid.html',
    scope: {
      title: '=',
      headers: '=',
      items: '=',
      click: '&onClick',
      deleteClick: '&onRemove',
    },
    link: link,
    controller: 'gridController'
  };

  return directive;


  function link($scope) {

    $scope.click = (item) => {
      $scope.$parent.onClickDone(item);
      $scope.setDoingItems($scope.items);
      $scope.setDoneItems($scope.items);
    }

    $scope.deleteClick = (item) => {
      $scope.$parent.onClickRemove(item);
      $scope.setDoingItems($scope.items);
      $scope.setDoneItems($scope.items);
    }
  }
}