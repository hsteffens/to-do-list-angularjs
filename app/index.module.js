import './scss/style.scss';
import angular from 'angular';
import components from './components/components.module';
import features from './features/features.module';

export default angular
  .module('my-app', [components, features])
  .name;