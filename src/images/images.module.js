import angular from 'angular';

import LightboxDirective from './lightbox.directive';

export default angular.module('ouijan.images', [])
	.directive('lightbox', LightboxDirective)
	.name;
