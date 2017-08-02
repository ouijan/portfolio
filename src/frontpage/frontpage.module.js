import angular from 'angular';

import Frontpage from './frontpage.component.js';

export default angular.module('ouijan.frontpage', [])
	.component('frontpage', Frontpage)
	.name;
