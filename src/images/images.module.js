import angular from 'angular';

import MediaInspect from './media-inspect.directive';

export default angular.module('ouijan.images', [])
	.directive('mediaInspect', MediaInspect)
	.name;
