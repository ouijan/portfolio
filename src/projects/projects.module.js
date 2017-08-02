import angular from 'angular';

import ProjectFactory from './project.factory';
import Projects from './projects.service';
import ProjectDetails from './project_details.component';

export default angular.module('ouijan.projects', [])
	.service('ProjectFactory', ProjectFactory)
	.service('Projects', Projects)
	.component('projectDetails', ProjectDetails)
	.name;
