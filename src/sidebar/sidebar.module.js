import angular from 'angular';

import sidebar from './sidebar.component';
import SidebarService from './sidebar.service';

export default angular.module('ouijan.sidebar', [])
	.component('ouijanSidebar', sidebar)
	.service('Sidebar', SidebarService)
	.name;