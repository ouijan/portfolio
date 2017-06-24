import ProjectsData from './projects.data';

export default class Projects {

	/* @ngInject */
	constructor(ProjectFactory) {
		this.ProjectFactory = ProjectFactory;
	}

	all(resolve = () => {}) {
		let projects = [];

		ProjectsData.forEach((data) => {
			let project = this.ProjectFactory.make(data);
			projects.push(project);
		});

		resolve(projects);
	}

}