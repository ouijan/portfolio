import Image from './../images/image';

export default class ToolbarController {
  
  /* @ngInject */
	constructor($mdMedia, Sidebar) {
		this.$mdMedia = $mdMedia;
		this.Sidebar = Sidebar;

		this.logo = new Image('logo.svg');
	}

}