import { grid } from './grid.directive';
import { GridController } from './grid.controller';

export default angular
  .module('my-app.components.grid', [])
  .directive('grid', grid)
  .controller('gridController', GridController)
  .name;