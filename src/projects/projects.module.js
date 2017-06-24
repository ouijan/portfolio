import angular from 'angular';

import ProjectFactory from './project.factory';
import Projects from './projects.service';

export default angular.module('ouijan.projects', [])
	.service('ProjectFactory', ProjectFactory)
	.service('Projects', Projects)
	.name;
