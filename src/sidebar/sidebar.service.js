export default class SidebarService {
  
  /* @ngInject */
	constructor($mdMedia, $mdSidenav) {
		this.$mdMedia = $mdMedia;
		this.$mdSidenav = $mdSidenav;

		this.id = 'left';
	}

	/**
	 * Check if sidebar should be locked open
	 * @return {Boolean}
	 */
	isLockedOpen() {
		return this.$mdMedia('gt-sm');
	}

	/**
	 * Open sidebar
	 * @return {void}
	 */
	open() {
		this.$mdSidenav(this.id).open();
	}

	/**
	 * Close Sidebar
	 * @return {void}
	 */
	close() {
		this.$mdSidenav(this.id).close();
	}

}