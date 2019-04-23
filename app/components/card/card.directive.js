import '../../scss/app/card.scss'

export function card(){
  let directive = {
    restrict: 'E',
    templateUrl: 'components/card/card.html',
    scope: {
      item: '=',
      addClick: '&onAdd',
      doneClick: '&onClick',
      deleteClick: '&onRemove',
    },
    controller: 'cardController'
  };

  return directive;


}