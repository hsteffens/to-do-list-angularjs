import card    from './card/card.module'
import grid    from './grid/grid.module'

export default angular
  .module('my-app.components', [
    card,
    grid
  ])
  .run(function () {
    'ngInject';

    console.log('Components modules loaded.');
  })
  .name;