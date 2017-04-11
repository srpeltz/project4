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
  .state('about', {
    url: '/about',
    templateUrl: 'about.html'
  })
  .state('signin', {
    url: '/signin',
    templateUrl: 'signin.html',
    controller: 'SignInController',
    controllerAs: 'vm'
  })
  .state('userProfilePage', {
    url: '/profile',
    templateUrl: 'userProfilePage.html',
    controller: 'UsersController',
    controllerAs: 'profileVm'
  })
}
