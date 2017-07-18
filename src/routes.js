
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
    project: ($stateParams, Projects) => 
      Projects.get({ slug: $stateParams.slug }).$promise,
  }
};

export default [
  about,
  projects,
];