import ProjectsData from './projects.data';

export default class Projects {

	/* @ngInject */
	constructor(ProjectFactory) {
		this.ProjectFactory = ProjectFactory;
	}

	getBySlug(slug) {
		for (var i = ProjectsData.length - 1; i >= 0; i--) {
			let data = ProjectsData[i];
			if (data.slug === slug) {
				return this.ProjectFactory.make(data);
			}
		}
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