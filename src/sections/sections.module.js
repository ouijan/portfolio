import angular from 'angular';

import About from './about.component';
import Brands from './brands.component';
import Services from './services.component';
import Splash from './splash.component';
import Contact from './contact.component';
import CallToAction from './call_to_action.component';

export default angular.module('ouijan.sections', [])
	.component('about', About)
	.component('brands', Brands)
	.component('services', Services)
	.component('splash', Splash)
	.component('contact', Contact)
	.component('callToAction', CallToAction)
	.name;
