import angular from 'angular';

import layout from './layout.component';
import toolbar from './toolbar.component';
import sidebar from './sidebar.component';

export default angular.module('ouijan.layout', [])
	.component('ouijanApp', layout)
	.component('ouijanToolbar', toolbar)
	.component('ouijanSidebar', sidebar)
	.name;