export const routes = ($routeProvider) => {
  return $routeProvider
    .when('/', {
      template: '<app-employees></app-employees>'
    })
    .when('/about', {
      template: '<app-about></app-about>'
    });
}
