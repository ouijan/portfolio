import Project from './project';

export default class ProjectFactory {

	constructor() {
		// ...
	}

	make(data) {
		return new Project(data);
	}

}