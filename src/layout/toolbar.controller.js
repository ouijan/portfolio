import Image from './../images/image';

export default class ToolbarController {
  
  /* @ngInject */
	constructor($mdSidenav, $mdMedia) {
		this.$mdMedia = $mdMedia;
		this.$mdSidenav = $mdSidenav;

		this.sidebar = undefined;
		this.logo = new Image('logo only.svg');
	}

	$onInit() {
		this.sidebar = this.$mdSidenav(this.sidebarId, true);	
	}

}