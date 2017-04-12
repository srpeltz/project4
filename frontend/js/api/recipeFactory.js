angular.module('Recipes')
  .factory('RecipeFactory', RecipeFactory)

RecipeFactory.$inject = ['$http']
  var apiUrl = 'http://food2fork.com/api/search/3jypCYH716O6Sd25B72jpv3TFR3g7S2d'

return {
  index: index
}

function index() {
  return $http.get(apiUrl)
}
