import Project from './project';

export default class ProjectFactory {

	/**
	 * Make a new Project
	 * @param  {Object} data
	 * @return {Project}
	 */
	make(data) {
		return new Project(data);
	}

}