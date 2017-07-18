import Image from './../images/image';

export default class SidebarController {
  
  /* @ngInject */
	constructor(Projects, $state, $mdSidenav) {
		this.Projects = Projects;
		this.$state = $state;
		this.$mdSidenav = $mdSidenav;

		this.sidebar = undefined;
		this.projectList = [];
		this.aboutImage = new Image('profile.png');
		this.logo = new Image('logo.svg');

		this.contact = {
			email: "tobyharris93@gmail.com",
			phone: "0400303037",
		};
	}

	/**
	 * Run on init
	 * @return {void}
	 */
	$onInit() {
		this.loadProjects();
		this.sidebar = this.$mdSidenav(this.sidebarId, true);	
	}

	/**
	 * Load projects for display
	 * @return {void}
	 */
	loadProjects() {
		this.Projects.query((projects) => this.projectList = projects);
	}

	/**
	 * Go to a project view
	 * @param  {string} state
	 * @param  {Object} params
	 * @return {void}
	 */
	goTo(state, params = {}) {
		this.sidebar.close();
		this.$state.go(state, params);
	}

}