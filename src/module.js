import 'angular-material/angular-material.scss';
import './styles/main.scss';

import angular from 'angular';
import ngMaterial from 'angular-material';

import layout from './layout/layout.module';
import projects from './projects/projects.module';

export default angular.module('ouijan', [
	ngMaterial,
	layout,
	projects,
]).name;
