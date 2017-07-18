
export default class Projects {

	/* @ngInject */
	constructor($resource, ProjectFactory) {
		this.ProjectFactory = ProjectFactory;

		this.baseUrl = '/assets/json/projects/:slug.json';
		return $resource(this.baseUrl, {}, { 
			get: {
        method:'GET',
        transformResponse: (data) => this.transformResponse(data),
      },
      query: {
        method:'GET',
        isArray:true,
        transformResponse: (data) => this.transformResponse(data),
      }
    });
	}

  /**
   * Transform response data into Projects
   * @param  {Class} factory
   * @param  {string} data
   * @return {Project|Array)
   */
  transformResponse(data) {
  	data = angular.fromJson(data);
  	
  	if (!Array.isArray(data)) {
  		return this.ProjectFactory.make(data);
  	}

  	let projects = [];
  	data.forEach((item) => {
  		let project = this.ProjectFactory.make(item);
  		projects.push(project);
  	})
  	
  	return projects;
  }

}