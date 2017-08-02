import angular from 'angular';

import layout from './layout.component';
import toolbar from './toolbar.component';
import Loader from './loader.service.js';

export default angular.module('ouijan.layout', [])
	.component('ouijanApp', layout)
	.component('ouijanToolbar', toolbar)
	.service('Loader', Loader)
	.name;