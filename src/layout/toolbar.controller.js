
export default class ToolbarController {
  
  /* @ngInject */
	constructor($mdSidenav, $mdMedia) {
		this.$mdMedia = $mdMedia;
		this.$mdSidenav = $mdSidenav;

		this.sidebar = undefined;
	}

	$onInit() {
		this.sidebar = this.$mdSidenav(this.sidebarId, true);	
	}

}