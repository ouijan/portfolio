
export default class Loader {
  
  /* @ngInject */
	constructor() {
		this.shown = false;
	}

	/**
	 * Show the loader
	 * @return {void}
	 */
	show() {
		this.shown = true;
	}

	/**
	 * Hide the loader
	 * @return {void}
	 */
	hide() {
		this.shown = false;
	}

	/**
	 * Show loader until promise is resolved
	 * @param  {Promise} promise
	 * @return {void}
	 */
	showUntil(promise) {
		this.show();

		promise.then(() => {
			this.hide();
		}, () => {
			this.hide();
		});

		return promise;
	}


}