angular.module('Recipes')
  .factory('RecipeFactory', RecipeFactory)

RecipeFactory.$inject = ['$http']

function RecipeFactory($http) {
  var apiUrl = 'http://food2fork.com/api/search?key=542b55facc7ab92140bab83167fdd2af'

  return {
    index: index,
    show: show
  }

  function index() {
    return $http.get(apiUrl)
  }

  function show(recipe) {
    return $http.get(apiUrl)
  }
}
