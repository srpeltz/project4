angular.module('Recipes', [])
  .controller('RecipesController', RecipesController)

RecipesController.$inject = ['RecipeFactory']

function RecipesController(RecipeFactory) {
  var self = this
  self.loading = true

  RecipeFactory.index()
    .success(function(data) {
      self.allRecipes = data.res
      console.log(self.allRecipes)
    })
}
