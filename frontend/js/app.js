angular
  .module('Recipes', ['ui.router'])
  .config(RecipeRouter)

function RecipeRouter($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/")

  $stateProvider
  .state('root', {
    url:'/',
    templateUrl: 'root.html'
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
  .state('userEdit', {
    url: '/profile/edit',
    templateUrl: 'userEdit.html',
    controller: 'UsersController',
    controllerAs: 'profileVm'
  })
  // .state('showRecipe', {
  //   url: '/recipe',
  //   templateUrl: 'showRecipe.html',
  //   controller: 'recipes.controller',
  //   controllerAs: 'recipeVm'
  // })
}
