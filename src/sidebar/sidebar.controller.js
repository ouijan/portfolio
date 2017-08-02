import Image from './../images/image';

export default class SidebarController {
  
  /* @ngInject */
	constructor(Projects, Sidebar, $state) {
		this.Projects = Projects;
		this.Sidebar = Sidebar;
		this.$state = $state;

		this.projectList = [];
		this.aboutImage = new Image('profile.jpg');
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
		this.Sidebar.close();
		this.$state.go(state, params);
	}

}