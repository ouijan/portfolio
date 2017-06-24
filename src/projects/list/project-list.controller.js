
export default class ProjectListController {
  
  /* @ngInject */
	constructor(Projects) {
		this.Projects = Projects;

		this.projectList = [];
	}

	$onInit() {
		this.loadProjects();
		console.log(this);
	}

	loadProjects() {
		this.projectList = this.Projects.all();
	}

}