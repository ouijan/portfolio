import Lightbox from './lightbox';

/* @ngInject */
export default ($mdDialog) => {
	return {
		restrict: 'A',
		link: (scope, elem) => {
			let inspector = new Lightbox(elem, $mdDialog);
			inspector.$onInit();
		}
	};
};
