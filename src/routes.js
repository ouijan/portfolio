
let about = {
  name: 'about',
  url: '/',
  component: 'frontpage',
};

let projects = {
  name: 'projects',
  url: '/projects/:slug',
  component: 'projectDetails',
  resolve: {
    project: ($stateParams, Projects, Loader, $q) => {
      let promise = Projects.get({ slug: $stateParams.slug }).$promise;
      return Loader.showUntil(promise);
    }
  }
};

export default [
  about,
  projects,
];