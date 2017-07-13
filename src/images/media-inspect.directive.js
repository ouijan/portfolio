// import templateUrl from './media-inspect.component.html';
// import controller from './media-inspect.controller';

/* @ngInject */
export default (Lightbox) => {
	return {
		restrict: 'A',
		link: (scope, iElement, iAttrs, controller, transcludeFn) => {
			let inspector = new MediaInspector(iElement, Lightbox);
			inspector.registerOnClick();
		}
	};
};

class MediaInspector {

	constructor(elem, Lightbox) {
		this.lightbox = Lightbox;
		this.elem = elem;
	}

	registerOnClick() {
		this.elem.on('click', () => {
			this.onClick();
		});
	}

	onClick() {
		this.lightbox.open(this.elem);
	}

}