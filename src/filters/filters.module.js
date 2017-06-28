import angular from 'angular';

export default angular.module('ouijan.filters', [])
	.filter('trustedHtml', ($sce) => $sce.trustAsHtml)
	.name;