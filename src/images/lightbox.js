export default class Lightbox {

	constructor(elem, $mdDialog) {
		this.$mdDialog = $mdDialog;
		this.elem = elem;

		this.triggerAttr = 'lightbox';
	}

	/**
	 * Run on Init
	 * @return {void}
	 */
	$onInit() {
		this.elem.on('click', () => {
			this.showLightbox();
		});
	}

	/**
	 * Get the template for lightbox dialog
	 * @return {string}
	 */
	getDialogTemplate() {
		let clone = this.elem.clone();
		clone.removeAttr(this.triggerAttr);
					 
		return `
			<md-dialog class="lightbox" aria-label="Lightbox Dialog"> 
        <md-dialog-content>
        	<md-button class="md-icon-button" aria-label="Close" 
        		ng-click="vm.$mdDialog.hide()">
        		<md-icon>close</md-icon>
      		</md-button>
          ${clone[0].outerHTML}
        </md-dialog-content>
      </md-dialog>
		`;
	}

	/**
	 * Show Lightbox Dialog
	 * @return {void}
	 */
	showLightbox() {
		this.$mdDialog.show({
			template: this.getDialogTemplate(),
			controllerAs: 'vm',
			controller: () => this,
      clickOutsideToClose: true,
      escapeToClose: true,
      openFrom: this.elem[0],
      closeTo: this.elem[0],
		});
	}

}