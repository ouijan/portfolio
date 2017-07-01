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

	$onInit() {
		this.loadProjects();
		this.sidebar = this.$mdSidenav(this.sidebarId, true);	
	}

	loadProjects() {
		this.Projects.all((projects) => 
			this.projectList = projects);
	}

	goTo(state, params = {}) {
		this.sidebar.close();
		this.$state.go(state, params);
	}

}