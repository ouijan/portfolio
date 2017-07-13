export default class MediaInspector {

	constructor(elem, $mdDialog) {
		this.$mdDialog = $mdDialog;
		this.elem = elem;
	}

	registerOnClick() {
		this.elem.on('click', () => {
			this.onClick();
		});
	}

	getDialogTemplate() {
		let clone = this.elem.clone();
		clone.removeAttr('media-inspect');
					 
		return `
			<md-dialog class="lightbox" aria-label="Media Inspect Dialog"> 
        <md-dialog-content>
          ${clone[0].outerHTML}
        </md-dialog-content> 
      </md-dialog>
		`;
	}

	onClick() {
		let template = this.getDialogTemplate();
		console.log(template);
		this.$mdDialog.show({
			template,
      clickOutsideToClose: true,
      escapeToClose: true,
      openFrom: this.elem[0],
		});
	}

}