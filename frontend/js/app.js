angular
  .module('Recipes', ['ui.router'])
  .config(RecipeRouter)

function RecipeRouter($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/")

  $stateProvider
  .state('index', {
    url:'/',
    templateUrl: 'index.html'
  })
  .state('signin', {
    url: '/signin',
    templateUrl: 'signin.html',
    controller: 'SignInController',
    controllerAs: 'vm'
  })
}
