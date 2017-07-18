import 'angular-material/angular-material.scss';
import './styles/main.scss';

import angular from 'angular';
import ngMaterial from 'angular-material';
import ngResource from 'angular-resource';
import uirouter from '@uirouter/angularjs';
import angulartics from 'angulartics';
import angularticsGa from 'angulartics-google-analytics';

import routes from './routes';
import pallettes from './pallettes';
import layout from './layout/layout.module';
import projects from './projects/projects.module';
import filters from './filters/filters.module';
import about from './about/about.module';
import images from './images/images.module';

let app = angular.module('ouijan', [
	ngMaterial,
	ngResource,
	uirouter,
	angulartics,
	angularticsGa,
	layout,
	projects,
	filters,
	about,
	images,
]);
	
// Configure Theme
app.config(($mdThemingProvider) => {
	angular.forEach(pallettes, (config, name) => {
		$mdThemingProvider.definePalette(name, config);
	});
	$mdThemingProvider.theme('default').primaryPalette('purple');
	$mdThemingProvider.enableBrowserColor({
    theme: 'default',
    palette: 'primary',
    hue: '800'
  });
});

// Configure Routes
app.config(($stateProvider, $urlRouterProvider) => {
	routes.forEach((route) => $stateProvider.state(route));
	$urlRouterProvider.otherwise('/about');
});

export default app.name;