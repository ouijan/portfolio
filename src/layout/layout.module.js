import angular from 'angular';

import layout from './layout.component.js';

export default angular.module('ouijan.layout', [])
	.component('ouijanApp', layout)
	.name;