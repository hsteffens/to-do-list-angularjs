import { card } from './card.directive';
import { CardController } from './card.controller';

export default angular
  .module('my-app.components.card', [])
  .directive('card', card)
  .controller('cardController', CardController)
  .name;