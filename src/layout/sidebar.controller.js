import Image from './../images/image';

export default class SidebarController {
  
  /* @ngInject */
	constructor(Projects) {
		this.Projects = Projects;

		this.projectList = [];
		this.aboutImage = new Image('profile.png');
	}

	$onInit() {
		this.loadProjects();
	}

	loadProjects() {
		this.Projects.all((projects) => 
			this.projectList = projects);
	}

}