import angular from 'angular';

import splash from '../splash/splash.module';

import layout from './layout.component';
import toolbar from './toolbar.component';
import sidebar from './sidebar.component';

export default angular.module('ouijan.layout', [
	splash
])
	.component('ouijanApp', layout)
	.component('ouijanToolbar', toolbar)
	.component('ouijanSidebar', sidebar)
	.name;