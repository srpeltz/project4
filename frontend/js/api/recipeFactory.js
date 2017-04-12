angular.module('Recipes')
  .factory('RecipeFactory', RecipeFactory)

RecipeFactory.$inject = ['$http']

function RecipeFactory($http) {

  return {
    index: index,
    show: show
  }

  function index() {
    return $http.get('/api/recipes')
  }

  function show(recipe) {
    return $http.get()
  }
}
