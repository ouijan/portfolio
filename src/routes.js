
let about = {
  name: 'about',
  url: '/about',
  component: 'about',
};

let projects = {
  name: 'projects',
  url: '/projects/:slug',
  component: 'projectDetails',
  resolve: {
  	project: ($stateParams, Projects) => Projects.getBySlug($stateParams.slug)
  }
};

export default [
	about,
	projects,
];