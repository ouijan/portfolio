import angular from 'angular';

import MediaInspect from './media-inspect.directive';
import Lightbox from './lightbox.service';

export default angular.module('ouijan.images', [])
	.directive('mediaInspect', MediaInspect)
	.service('Lightbox', Lightbox)
	.name;
