import ProjectsData from './projects.data';

export default class Projects {

	/* @ngInject */
	constructor(ProjectFactory) {
		this.ProjectFactory = ProjectFactory;
	}

	/**
	 * Get a project by slug
	 * @param  {string} slug
	 * @return {Project}
	 */
	getBySlug(slug) {
		for (var i = ProjectsData.length - 1; i >= 0; i--) {
			let data = ProjectsData[i];
			if (data.slug === slug) {
				return this.ProjectFactory.make(data);
			}
		}
	}

	/**
	 * Get all Projects
	 * @param  {Function} resolve
	 * @return {void}
	 */
	all(resolve = () => {}) {
		let projects = [];

		ProjectsData.forEach((data) => {
			let project = this.ProjectFactory.make(data);
			projects.push(project);
		});

		resolve(projects);
	}

}