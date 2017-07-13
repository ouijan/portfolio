import MediaInspector from './media_inspector';

/* @ngInject */
export default ($mdDialog) => {
	return {
		restrict: 'A',
		link: (scope, iElement, iAttrs, controller, transcludeFn) => {
			let inspector = new MediaInspector(iElement, $mdDialog);
			inspector.registerOnClick();
		}
	};
};
