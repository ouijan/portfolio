import templateUrl from './project_details.component.html';
import controller from './project_details.controller';

export default {
	templateUrl,
	controller,
	controllerAs: 'vm',
	bindings: {
		project: '=',
	}
};