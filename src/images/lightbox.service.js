class Box {
	constructor() {
		this.elem = angular.element(`<div 
				class="ouijan-lightbox" 
				layout="column" 
				layout-align="center center"
			></div>
		`);
		
		this.elem.on('click', (event) => {
			// if (event.srcElement === this.elem[0]) {
				this.hide();
			// }
		});

		this.inner = angular.element(`<div class="lightbox-inner"></div>`);
		this.elem.append(this.inner);

		this.hide();
		angular.element(document.body).append(this.elem);
	}

	show(elem) {
		if (this.elem.hasClass('ng-hide')) {
			let clone = elem.clone();
			this.inner.empty();
			this.inner.append(clone);
			this.elem.toggleClass('ng-hide');
		}
	}

	hide() {
		if (!this.elem.hasClass('ng-hide')) {
			this.elem.toggleClass('ng-hide');
			this.inner.empty();
		}
	}

}

export default class Lightbox {
	
	/* @ngInject */
	constructor($mdDialog) {
		this.box = new Box();
		console.log(this);
	}

	open(elem) {
		console.log('opening lightbox: ', elem);
		this.box.show(elem);
	}

	close() {
		console.log('closing lightbox: ', elem);
		this.box.hide();
	}

}